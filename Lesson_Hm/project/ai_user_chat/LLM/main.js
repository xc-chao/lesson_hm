// node 内置的http 模块 
const http = require('http');
const OpenAi = require('openai');
const url = require('url');// node 内置

const client = new OpenAi({
  apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
  baseURL: 'https://api.302.ai/v1'
});

const getCompletion =  async (prompt, model="gpt-4o") => {
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

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
  
  const parsedUrl = url.parse(req.url, true);
  const queryObj = parsedUrl.query;

  console.log(parsedUrl.query);
  const prompt = `
  ${queryObj.data}
  请根据上面的JSON数据，回答${queryObj.question} 这个问题
  `
  console.log(prompt)
  const result = await getCompletion(prompt)
  let info = {
    result
  }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/json')
  res.end(JSON.stringify(info))
})

server.listen(1314)