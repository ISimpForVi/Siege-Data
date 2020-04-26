const fs = require("fs");

let maps = JSON.parse(fs.readFileSync("./maps.json"));

Object.values(maps).forEach(map => {

})