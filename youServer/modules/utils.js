const request = require("request");
module.exports.request = function (url) {
    return new Promise((resolve,reject)=>{
        request(url,(err,response,body)=>{
            if(!err && response.statusCode === 200) {
                resolve(JSON.parse(body))
            }
            else{
                reject(err);
            }
        })
    })
}