(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function () { return sandbox.spy(); };
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };

    describe('persistenceStrategy', function () {
        var classes = { };
        var persistenceStrategy;

        before(function (done) {
            requirejs([ 'app/PersistenceStrategy' ], function (PersistenceStrategy) {
                classes.PersistenceStrategy = PersistenceStrategy;

                done();
            });
        });

        it('should use whatever syncing method it receives', function () {
            var syncMethod = spy();
            var args = { a: 'a', b: 'b', c: 'c' };

            persistenceStrategy = new classes.PersistenceStrategy(syncMethod);

            persistenceStrategy.sync(args.a, args.b, args.c);

            expect(syncMethod).to.have.been.calledWith(args.a, args.b, args.c);

        });

        after(reset);

        describe('sync', function () {
            describe('_Request()', function () {
                it('should be created whenever sync is called', function () {
                    persistenceStrategy.sync();

                    var request = persistenceStrategy._Request.returnValues[0]

                    expect(request).to.exist;
                });

                it('should be a read request for every read request sync receives', function () {
                    persistenceStrategy.sync('read');

                    var request = persistenceStrategy._Request.returnValues[0]

                    expect(request._type).to.equal('READ');
                });

                it('should be a write request for every create, update and delete request sync receives', function () {
                    var request;
                    var i = 0;

                    _.each([ 'create', 'update', 'delete' ], function (requestType) {
                        persistenceStrategy.sync(requestType);

                        request = persistenceStrategy._Request.returnValues[i]

                        expect(request._type).to.equal('WRITE');
                    });
                });

                afterEach(reset);
            });
        
            describe('_processRequest', function () {
                spy(persistenceStrategy, '_processRequest');

            });
        });
    });
})(require, describe, it);
