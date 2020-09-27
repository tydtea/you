const {request} = require("./utils")
const index = {
    async cateList(req,res){
        const {data} = await request("https://m.you.163.com/xhr/page/global.json")
        const cateList = [
            {
                id:0,
                name:"推荐"
            },
            ...data.cateList
        ]
        res.json(cateList);
    }
}

module.exports.index = index;





// 首页相关的Api vuex
// module.exports.getCateList = async (req,res)=>{
//     const {data} = await request("https://m.you.163.com/xhr/page/global.json")
//     const cateList = [
//         {
//             id:0,
//             name:"推荐"
//         },
//         ...data.cateList
//     ]
//     res.json(cateList);
//     // request("https://m.you.163.com/xhr/page/global.json",(err,response,body)=>{
//     //     if(!err && response.statusCode === 200){
//     //         // 给返回的数据增加上一个推荐 元素。
//     //         const cateList = [
//     //             {
//     //                 id:0,
//     //                 name:"推荐"
//     //             },
//     //             ...JSON.parse(body).data.cateList
//     //         ];
//     //
//     //         // const cateList = JSON.parse(body).data.cateList;
//     //         // cateList.unshift( {
//     //         //     id:0,
//     //         //     name:"推荐"
//     //         // })
//     //         res.json(cateList);
//     //     }
//     // })
// }
