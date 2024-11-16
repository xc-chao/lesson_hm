import dotenv from 'dotenv'
dotenv.config()
//console.log(process.env.OpenAI_API_KEY,'///') // 环境变量的值

// 引入openai 客户端

import OpenAI  from "openai";
// 示例化openai 客户端 
const client = new OpenAI({
  apiKey: 'sk-nwDEG8UhIM78Da5xcPLwsRv0vj83yCVviIxegcYLHlqGFkAe', 
  // apiKey:process.env.OpenAI_API_KEY, // 这个值是从环境变量中获取的
  baseURL: 'https://api.302.ai/v1' // 转发 
})

// 良好的编程风格
// 主函数 执行的入口， 单点
// 函数申明
// es6 箭头函数 传统函数更简洁 
// 赋值语句
// 函数也是对象
// 函数表达式
// async 是函数修饰符，+  await  一对
const main = async () => {
  // openai 的调用是异步的 
  // client 是对象 调用方法
  // await 等会儿
  // chat 聊天的方式调用
  // completions 完成问答 请大模型完成
  // create 创建
 try{
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',// 角色
        content:[ // 数组
          {
            type: 'text',
            'text': '请描述以下图片的内容'
          },
          {
            type: 'image_url',
            "image_url": {
              "url": "https://img.huxiucdn.com/img/minitopic/202406/25/084826659075.jpg?imageView2/1/w/512/h/512/|imageMogr2/strip/interlace/1/quality/85"
            }
          }
        ]
      }
    ],
    max_tokens:300
  })
  console.log(response.choices[0].message.content)
  // choices[0] 数组的第一个元素 取一条数据
  // message 消息
  // content 内容
 }catch(err){
  console.log(err) 

}
}
main()