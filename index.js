const fs = require("fs");
const mypath = require("path");

const log = require("./js/log");
const Record = require("./js/Record");
const readXml = require('./js/readXML');//读取文件
const utils = require('./js/utils');

//程序运行参数
var scanDir = "E://transtest//";//实际运行时需手动配置process.argv[2]

// 配置

var putFileRecord = [];//记录每个目录中的文件数量
var waitingQueue = [];
var block= {wait: false};//putDocFile控制Flag 同一时间内只能放入一个文件

fs.readdir(scanDir, (err, files) => {
    if (err) {
        console.log(err);
        log("read " + scanDir + " failed!");
    }
    console.log("总共"+files.length+"个文件开始整理和录入数据!");

    if(files.length > 0){
        let i = 0;
        putDocFile(scanDir+files[0]);
        Object.defineProperty(block, 'wait', {
            set: function (value) {
                console.log(value);
                if(!value){
                    if(i < files.length -1){
                        i ++;
                        putDocFile(scanDir+files[i]);
                    }else{
                        console.log("总共"+files.length+"个文件已完成归档整理!")
                    }
                }
            }
        });
    }
});


//创建并放入文件夹内
function putDocFile(path, size) {
    block.wait = true;
    //随机放在0~99的某个目录内
    let targetDir = generateRandomNumber();
    targetDir > 9 ? null : targetDir = "0" + targetDir;

    let flag = false;//一个该目录是否已经被创建flag
    let indexE;//若该目录创建过,记录在putFileRecord中的index

    //首先遍历判断产生的目录是否已经被创建过
    putFileRecord.forEach((item, index) => {
        if (item && item.dirID === targetDir) {
            flag = true;
            indexE = index;
        }
    });


    //该目录没有被创建过,该文件为放入该目录的第一个文件
    if (!flag) {
        //记每个文件夹放了多少个文件,未创建时该目录中文件数为0
        let eachDirRecord = {dirID: targetDir, serial: 0};
        eachDirRecord.serial = 1;
        putFileRecord.push(eachDirRecord);

        //移动文件后,将文件改名为SD+dirID+serialNumber的形式
        //let fileID = 'SD' + targetDir + '00' + '.hsd';

        //递归创建该目录
        utils.mkdirs('targetDir/' + targetDir);

        let fileName = mypath.basename(path);

        //移动文件
        fs.rename(path, 'targetDir/' + targetDir + '/' + fileName, function (err) {
            if (err) {
                console.log("move file failed! " + err + flag);
                log(err);

                let queueEach = {sDir: path, tarDir: 'targetDir/' + targetDir + '/' + fileName};
                waitingQueue.push(queueEach);
                return;
            }

            //读取property.xml并写入mongoDB
            readXml('targetDir/' + targetDir +'/'+fileName,fileName,targetDir,insertItem);


        });
    } else {
        let fileName = mypath.basename(path);
        //移动文件后,将文件改名为SD+dirID+serialNumber的形式
       /* putFileRecord[indexE].serial < 10 ? fileID = 'SD' + targetDir + '0' + putFileRecord[indexE].serial + '.hsd' : fileID = 'SD' + targetDir + putFileRecord[indexE].serial + '.hsd';
        putFileRecord[indexE].serial++;*/
        //判断目标文件是否存在
        //console.log("文件" + fs.existsSync('targetDir/' + targetDir + '/' + fileID));
        //console.log("目录" + fs.existsSync('targetDir/' + targetDir));

        //递归创建目录
        //utils.mkdirs('targetDir/' + targetDir);

        //移动文件
        fs.rename(path, 'targetDir/' + targetDir + '/' + fileName, function (err) {
            if (err) {
                console.log("move file failed! " + err + flag);
                log(err);

                let queueEach = {sDir: path, tarDir: 'targetDir/' + targetDir + '/' + fileName};
                waitingQueue.push(queueEach);
                return;
            }

            //读取property.xml中的内容
            readXml('targetDir/' + targetDir +'/'+fileName,fileName,insertItem);
        });
    }

}

//原生插入数据
/*function insertData(url){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        var myobj = { name: "菜鸟教程", url: "www.runoob" };
        dbo.collection("site").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
}*/


//框架插入数据
function insertItem(data,targetDir){
    let dirID = {dirNo:targetDir+""};
    let insertDoc = Object.assign(data,dirID);
    console.log(insertDoc);
    let record = new Record(insertDoc);
    record.save(function (err) {
        if (err) {
            console.log("Error:" + err);
            waitingQueue.push(data.code);
        }
        block.wait = false;
    });
}

//随机产生一个0~99的随机数作为目录id
function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}

//将等待队列中的任务执行
/*
setTimeout(()=>{
    console.log("Timer");
    console.log(waitingQueue.length);
    console.log(waitingQueue);
    waitingQueue.forEach((item)=>{
        //putDocFile(item.sDir,item.tarDir);
        fs.rename(item.sDir,item.tarDir,function(err){
            if(err){
                console.log(err);
            }
        });
    })
},10000);
*/

