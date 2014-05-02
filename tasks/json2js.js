module.exports = function(grunt) {
  grunt.registerMultiTask('json2js', function() {
    var done = this.async();
    var files = this.files.slice();
    var varname = this.data.varname;

    function process() {
      if (files.length <= 0) {
        done();
        return;
      }
      var file = files.pop();
      //grunt.log.writeln("json2js: processing " + file.src[0] + "...");
      var json = grunt.file.read(file.src[0], { encoding: null });
      json = "var " + varname + " = " + json + ";";
      grunt.file.write(file.dest, json);
      //grunt.log.writeln("json2js: JS file written to " + file.dest);
      process();
    }

    process();
  });
};