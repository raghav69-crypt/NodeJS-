const a1 = require("path");
const finale = a1.basename("C:\\temp\\myfile.html");
console.log(finale); //basename
const show = a1.dirname("C:\\temp\\myfile.html");
console.log(show); //directory
const showfullDirectory = a1.extname("C:\\temp\\myfile.html");
console.log(showfullDirectory); //Full directory

