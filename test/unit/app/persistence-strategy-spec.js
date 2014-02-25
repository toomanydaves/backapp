(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var amd = config.amd;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function () { return sandbox.spy(); };
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };

    describe('persistenceStrategy', function () {
        var classes = { };
        var persistenceStrategy;
        var deferred;

        before(function (done) {
            amd([ 'app/PersistenceStrategy' ], function (PersistenceStrategy) {
                classes.PersistenceStrategy = PersistenceStrategy;

                done();
            });
        });

        it('should override default syncing method if desired', function () {
            var syncMethod = spy();
            var args = { a: 'a', b: 'b', c: 'c' };

            persistenceStrategy = new classes.PersistenceStrategy(syncMethod);

            persistenceStrategy.sync(args.a, args.b, args.c);

            expect(syncMethod).to.have.been.calledWith(args.a, args.b, args.c);

        });

        after(reset);

        describe('sync', function () {
            before(function () {
                persistenceStrategy = new classes.PersistenceStrategy();
            });

            describe('_Request()', function () {
                it('should be created whenever sync is called', function () {
                    persistenceStrategy.sync();

                    var request = persistenceStrategy._Request.returnValues[0];

                    expect(request).to.exist;
                });

                it('should be a read request for every read request sync receives', function () {
                    persistenceStrategy.sync('read');

                    var request = persistenceStrategy._Request.returnValues[0];

                    expect(request._type).to.equal('READ');
                });

                it('should be a write request for every create, update and delete request sync receives', function () {
                    var request;
                    var i = 0;

                    _.each([ 'create', 'update', 'delete' ], function (requestType) {
                        persistenceStrategy.sync(requestType);

                        request = persistenceStrategy._Request.returnValues[i];

                        expect(request._type).to.equal('WRITE');
                    });
                });

                afterEach(reset);
            });
        
            describe('_processRequest', function () {
                before(function (done) {
                    spy(persistenceStrategy, '_processRequest');

                    amd([ 'jquery' ], function ($) {
                        classes.$ = $;

                        stub($, 'ajax');

                        done();
                    });
                });

                beforeEach(function () {
                    deferred = new classes.$.Deferred();

                    classes.$.ajax.returns(deferred);
                });

                it('should process read requests concurrently', function () {
                    persistenceStrategy.sync('read');
                    persistenceStrategy.sync('read');

                    expect(classes.$.ajax).to.have.been.calledTwice;
                });

                it('should not issue further requests until a write request returns successfully', function () {
                    persistenceStrategy.sync('create');
                    persistenceStrategy.sync('read');

                    expect(classes.$.ajax).to.have.been.calledOnce;

                    deferred.resolve();

                    expect(classes.$.ajax).to.have.been.calledTwice;
                });

                it('should await confirmation before issueing queued requests after an unsuccessful write request',
                    function () {
                        persistenceStrategy.sync('create');
                        persistenceStrategy.sync('read');

                        deferred.reject();

                        expect(classes.$.ajax).to.have.been.calledOnce;

                        persistenceStrategy.resume();

                        expect(classes.$.ajax).to.have.been.calledTwice;
                    }
                );

                afterEach(reset);

                describe('promise', function () {
                    beforeEach(function () {
                        deferred = new classes.$.Deferred();

                        classes.$.ajax.returns(deferred);
                    });

                    it('should be resolved when a request returns successfully', function (done) {
                        var sync = persistenceStrategy.sync();
                        var response = { foo: 'bar' };

                        deferred.resolve(response);

                        expect(sync).to.be.fulfilledWith(response);
                    });

                    it('should pass the error when a request fails', function () {
                        var sync = persistenceStrategy.sync();
                        var error = new Error();
                        
                        deferred.reject(error);

                        expect(sync).to.be.rejectedWith(error);
                    });

                    afterEach(reset);
                });
            });
        });
    });
})(require, describe, it);
