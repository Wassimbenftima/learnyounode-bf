var fs = require("fs");

fs.readdir(process.argv[2], function (err, data) {
  if (err) {
    return console.error(err);
  }
  var regxtest = new RegExp(".+." + process.argv[3] + "$");
  data
    .filter(function (elem) {
      return regxtest.test(elem);
    })
    .forEach(function (elem) {
      console.log(elem);
    });
});
