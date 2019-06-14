const fs = require("fs");

const utils = require("./utils");

let today = new Date();

function _generateRecordContents(record) {
    let time = today.toLocaleString();
    return template = `==================================================
    record:${record}
    time:${time}
    `;
}


//log目录要提前创建 否则不会存在该日志
let log = function (record) {
    utils.mkdirs('log');
    fs.writeFile("log\\" + today.toLocaleDateString() + ".txt", _generateRecordContents(record), {
        'encoding': 'utf8',
        'flag': 'a'
    }, () => {
        console.log("写入日志成功！" + record);
    });
};

module.exports = log;
