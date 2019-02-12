var path = require('path');
var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });//默认的情况下 gm使用的是另外一个图片处理程序

var app = process.app;
var config = app.get('read');
var targetDir = app.get('targetDir');

app.get('/:filename', function (req, res) {
        var filePath = path.join(targetDir, req.params.filename);
        fs.exists(filePath, function (exists) {
                res.sendfile(exists ? filePath : path.join(targetDir, config.default));
        });
});

function sendFile(folders, filename, res) {
        var ext = path.extname(filename).substr(1);
        if (!contentTypes[ext])
                return res.sendfile(getFilePath());

        folders.push(filename);
        var filePath = getFilePath(path.join.apply(path, folders));
        fs.exists(filePath, function (exists) {
                res.sendfile(exists ? filePath : getFilePath());
        });
}

function getFilePath(filename) {
        return path.join(app.get('targetDir'), filename || config.default);
}


//判断请求图片是否存在
if (exists)                                                     
        return res.sendfile(filePath);     
                         
var groups = filename.match(config.sizeReg);                    
if (!groups)                                                    
        return res.sendfile(getFilePath());                         
                                                                
folders[len] = groups[1] + "." + groups[4];              
filePath = getFilePath(path.join.apply(path, folders));         
var width = parseInt(groups[2]);                                
var height = parseInt(groups[3]);   
//判断原始图是否存在                            
fs.exists(filePath, function (exists) {                         
        if (!exists)                                                
                filePath = getFilePath();                               
                                                                
        var gm = gm(filePath);                                      
        if (width > 0 && height > 0)                                
                gm.resize(width, height);                               
        gm.toBuffer(function (err, buffer) {                        
                if (err)                                                
                        return res.sendfile(getFilePath());                 
                                                                
                res.set('Content-Type', contentTypes[ext]);             
                res.send(buffer);                                       
        });                                                         
});