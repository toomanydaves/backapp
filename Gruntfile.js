module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    cleanBowerDir: true,
                    cleanTargetDir: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};
