import OpenAI from "openai";
// es5 js没有模块化能力 简单 不需要模块化 交给函数就可以。
// 入口文件
// mjs es6 模块

const openai = new OpenAI({
    apiKey:"sk-pWMitUllr7jHTgmXYiYN6DSqAJq2hAc692v77M9mI3NLu5Uu", // 你的API密钥
    // 国内转发
    baseURL: "https://api.302.ai/v1", // 可选，默认为URL_ADDRESS
  
  });
  // 完成生成 GC
  const main = async() =>{
    // 图片模型
    const response = await openai.images.generate({
        model:"dall-e-3", // 模型名称
        prompt:"A spaceship flying through the universe.", // 生成的文本内容
        n:1, // 生成的图片数量
        size:'1024x1024' ,// 生成的图片大小
    })
    // 输出结果
    console.log(response.data[0].url);
  }
  // 调用函数
  main()