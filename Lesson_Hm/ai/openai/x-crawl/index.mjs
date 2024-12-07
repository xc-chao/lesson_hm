// es6 模块话 导包
// 解构运算符
import { 
  createCrawl,  // 返回爬虫实例
  createCrawlOpenAI // openai 配置项
} from 'x-crawl';

// 实例化爬虫应用
const cralwApp = createCrawl({
  maxRetry: 3,
  intervalTime: { max: 2000, min: 1000}
})

const crawlOpenAIApp = createCrawlOpenAI({
  clientOptions: {
    apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
    baseURL: 'https://api.302.ai/v1/'
  },
  defaultModel: {
    chatModel: 'gpt-4-turbo-preview'
  }
})

cralwApp.crawlPage('https://movie.douban.com/chart') // http请求
  .then(async (res) => {
    const{page,browser} = res.data
    const targetSelector = '.indent'
    await page.waitForSelector(targetSelector)
    const highkyHTML = await page.$eval(
      targetSelector,
      (el) => el.innerHTML
    )
    // console.log(highkyHTML)
    const result = await crawlOpenAIApp.parseElements(
      highkyHTML,
      `获取图片链接、电影名称、电影评分、电影简介
      输出格式为json 数组
      如：
      [{
        "src":"...",
        "title":"...",
        "score":"...",
        "desc":"..."
      }]
      `
    )
    browser.close();// 关闭浏览器
    console.log(result)

    cralwApp.crawlFile({
        targets:result.elements[0],
        storeDirs:'./upload'
    })
  })