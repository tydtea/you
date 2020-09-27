const express = require("express");
const {request} = require("./modules/utils");
const index = require("./modules/index");
const app = express();

/****************************首页*******************************************/
// 获得滑动导航
app.get("/cateList",async (req,res)=>{
    const {data} = await request("https://m.you.163.com/xhr/page/global.json")
    const cateList = [
        {
            id:0,
            name:"推荐"
        },
        ...data.cateList
    ]
    res.json(cateList);
    // request("https://m.you.163.com/xhr/page/global.json",(err,response,body)=>{
    //     if(!err && response.statusCode === 200){
    //         // 给返回的数据增加上一个推荐 元素。
    //         const cateList = [
    //             {
    //                 id:0,
    //                 name:"推荐"
    //             },
    //             ...JSON.parse(body).data.cateList
    //         ];
    //
    //         // const cateList = JSON.parse(body).data.cateList;
    //         // cateList.unshift( {
    //         //     id:0,
    //         //     name:"推荐"
    //         // })
    //         res.json(cateList);
    //     }
    // })
})

// 轮播图
app.get("/focusList",async (req,res)=>{
    const {data} =  await request("https://m.you.163.com/xhr/index.json");
    res.json(data.data.focusList)
})

app.get("/policyDescList",async  (req,res)=>{
    const {data} =  await request("https://m.you.163.com/xhr/index.json");
    res.json(data.data.policyDescList)
})

// 商品类别导航
app.get("/kingKongList",async (req,res)=>{
    const {data} = await request("https://m.you.163.com/xhr/index.json");
    res.json(data.data.kingKongModule.kingKongList)
})
// 获得商品列表
app.get("/categoryModule",async(req,res)=>{
    const categoryModule = require("./data/categoryModule.json");
    res.json(categoryModule)
})
app.listen(8090,function () {
    console.log("success");
})