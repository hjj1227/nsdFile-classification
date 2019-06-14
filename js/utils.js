const fs = require("fs");
const path = require("path");

let utils = {
    mkdirs(dirpath) {
        if (!fs.existsSync(path.dirname(dirpath))) {
            utils.mkdirs(path.dirname(dirpath));
        }
        if (!fs.existsSync(dirpath)) {
            fs.mkdirSync(dirpath);
        }
    },
    split_array(arr, len) {
        let results = [];
        let total_len = arr.length;
        for (let i = 0; i < total_len; i += len) {
            results.push(arr.slice(i, i + len))
        }
        return results;
    }//把一个数组分成几个小数组
};

module.exports = utils;

