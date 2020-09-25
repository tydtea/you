const express = require("express");
const app = express();
const {kingKongModule} = require("./data/index.json");
// 读取导航信息
app.get("/kingKongList",function (req,res) {
    res.json([
        ...[{
            text:"推荐"
        }],
        ...kingKongModule.kingKongList,
    ]);
})
app.listen(8090,function () {
    console.log("success");
})