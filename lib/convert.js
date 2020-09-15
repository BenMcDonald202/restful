const csvtojson = require("csvtojson");

const decode = function (csv) {
  return new Promise(function (resolve) {
    csvtojson({
      noheader: true,
    })
      .fromString(csv)
      .then((json) => {
        resolve(json);
      });
  });
};

const encode = (json) => {
  let lines = [];
  json.forEach((obj) => {
    let line = "";
    Object.entries(obj).forEach(([key, value]) => {
      line += `[${value}] `;
    });
    lines.push(line.trim() + "\n");
  });

  return lines.join("");
};

exports.decode = decode;
exports.encode = encode;