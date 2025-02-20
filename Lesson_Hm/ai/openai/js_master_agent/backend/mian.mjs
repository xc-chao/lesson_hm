import OpenAI from "openai";
import deotenv from "dotenv";
deotenv.config();
// es5 js没有模块化能力 简单 不需要模块化 交给函数就可以。
// 入口文件
// mjs es6 使用import和export关键字来导入和导出模块。

const openai = new OpenAI({
    apiKey:process.env.OpenAI_API_key, // 你的API密钥
    // 国内转发
    baseURL: process.env.URL_ADDRESS, // 可选，默认为URL_ADDRESS
  
  });
  // 完成生成 GC
  const main = async() =>{
    // 图片模型
    const response = await openai.images.generate({
        model:"dall-e-3", // 模型名称
        prompt:"这样的一位女生给人的感觉非常亲切和甜美。她拥有168厘米的身高，搭配上120斤（约等于59.9公斤）的体重，体态匀称，看起来健康而充满活力。她的圆圆脸蛋增添了她的可爱感，让人一见便心生好感。这样的女生往往给人一种温暖如春的感觉，无论是在朋友之间还是在工作学习中，都很容易成为大家喜爱的对象。", // 生成的文本内容
        n:1, // 生成的图片数量
        size:'1024x1024' ,// 生成的图片大小
    })
    // 输出结果
    console.log(response.data[0].url);
  }
  // 调用函数
  main()