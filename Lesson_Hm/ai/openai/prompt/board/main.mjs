import OpenAI from "openai/index.mjs"
import dotenv, { config } from "dotenv"

dotenv.config() //加载.env 文件, 加载到 process.env 中

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,  
})

// es6 默认参数值
// 通用的LLM 聊天完成接口函数， 复用
const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
    // 用户提的问题
    const messages = [{
      role: 'user',
      content: prompt
    }];
    // AIGC chat 接口
    const response = await client.chat.completions.create({
      model: model,
      messages: messages,
      // LLM 生成内容的随机性
      temperature: 0.1
    }) 
    return response.choices[0].message.content
  }
  
  const main = async () => {
    const user_messages = [
    "La performance du système est plus lente que d'habitude.",  //系统的性能比平时慢         
    "Mi monitor tiene píxeles que no se iluminan.",              //我的显示器有些像素点不亮。
    "Il mio mouse non funziona",                                // 我的鼠标坏了
    "Mój klawisz Ctrl jest zepsuty",                            // 我的Ctrl键坏了
    "我的屏幕在闪烁"                    
  ]
  // for of es6 的遍历
  // 技术循环，有什么好处？
  // 在局部作用域中，调用栈是js运行的依赖
  for(let issue of user_messages){
    // 简洁，代码可读性的提升
    console.log(issue)
    const prompt = `
    Tell me what language this is :"${issue}"
    `
    const counntryLanguage = await getCompletion(prompt)
    console.log(counntryLanguage)

    const resultPrompt = `
    帮我翻译一下， 翻译成中文："${issue}"
    `
    const result = await getCompletion(resultPrompt)
    console.log(`${counntryLanguage}, 翻译结果：${result}`)
  }
  // 访问不到上面的issue是因为，在for of 中， 形成了一个新的作用域
  // console.log(issue);
  
  }
  
  main()
