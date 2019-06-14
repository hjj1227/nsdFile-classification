const fs = require("fs");
const unzip = require("unzip");
const xmlReader = require("xmlreader");

const log = require("./log");
const utils = require("./utils");

let readXML = function (path, curFile,targetDir,callback) {
    utils.mkdirs('zip');
    fs.copyFile(path, "zip/" + curFile + ".zip", (err) => {
        if (err) {
            log(err);
            return;
        }

        console.log('重命名完成');
        //检查zip文件是否准备好
        _checkFileOK("zip/" + curFile + ".zip");

        //解压缩(什么时候解压成功)
        fs.createReadStream("zip/" + curFile + ".zip").pipe(unzip.Extract({path: "decompress/" + curFile})).on("close", () => {


            _checkFileOK('decompress/' + curFile + '/sd/document.xml');

            //把之前的zip文件删掉
            fs.unlink("zip/" + curFile + ".zip", (err) => {
                if (err) {
                    log(err);
                    return;
                }
                console.log('zip文件已删除');

                //读取xml文件
                fs.readFile('decompress/' + curFile + '/sd/property.xml', 'utf8', (err, data) => {
                    if (err) {
                        log(err);
                        return;
                    }

                    callback(_dealDataAndBuildRecord(data),targetDir);//输了...传回调了

                    _deleteFolderRecursively('decompress/' + curFile)
                });
            });
        });
    });
};

function _checkFileOK(filename) {
    try {
        fs.accessSync(filename, fs.constants.R_OK | fs.constants.W_OK);
        console.log('可以读写');
    } catch (err) {
        console.log(err);
        console.error('无权访问');
    }
}

function _deleteFolderRecursively(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                _deleteFolderRecursively(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function _dealDataAndBuildRecord(data){
    let dealedData = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>","");
    let recordObj = {};
    xmlReader.read(dealedData, function(errors, response){
        if(null !== errors ) {
            console.log(errors);
            return;
        }

        let keysArr = Object.keys(response.property.metadata);
        // keyArr = [ 'attributes',
        //   'parent',
        //   'count',
        //   'at',
        //   'each',
        //   'text',
        //   'TypeFullName',
        //   'ChineseKeyWord'
        //   .....

        for( let i = 6;i < keysArr.length; i ++){
            if(!response.property.metadata[keysArr[i]].text){
                recordObj[keysArr[i]] = "";
            }else{
                recordObj[keysArr[i]] = response.property.metadata[keysArr[i]].text();
            }
        }
    });
    return recordObj;
}


module.exports = readXML;