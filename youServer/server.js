const express = require("express");
const {request} = require("./modules/utils");
const index = require("./modules/index");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

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

// 保存用户的登陆信息  code
app.post("/sendUserInfo",async(req,res)=>{

    /*思路：
    * 1、接收参数
    * 2、根据code获得openId
    * 3、获得userList的数据，然后查看该数据当中是否有openId相同的元素。
    *       1、有：登陆过
    *       2、无：将个人信息放置到userList.json当中*/
    // const userInfo =  req.body;
    // request("https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code",(err,response,body)=>{
    //     if(!err && response.statusCode === 200){
    //         fs.readFile()
    //     }
    // })

    /*
    * 在userList.json当中存放数据。
    * 不能重复。排除重复。--》条件--》唯一》openid
    * */
    // openId
    // {"rawData":"{\"nickName\":\"张培跃\",\"gender\":1,\"language\":\"zh_CN\",\"city\":\"Changping\",\"province\":\"Beijing\",\"country\":\"China\",\"avatarUrl\":\"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epxoWwmuAmwsfraID0nYgQ4CK2eaVPGVhfIFuCUufQKmmWBHmIZ3rXS3gwdWw0YqUD9Ic6JV3fpAA/132\"}","signature":"a0cb1919abc2ce12bdf6dff7543cafdac26fce82"}
    console.log(userInfo);
    res.json({
        ok:1
    })
})
const a = 1.2345;
console.log(a.toFixed())
app.listen(8090,function () {
    console.log("success");
})