// lesson_hm/ai/modelscope/cursor/crawl/weibo_hotlist.js

const request = require('request-promise');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 定义目标URL
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送HTTP请求获取网页内容
request(url)
    .then(html => {
        // 使用cheerio加载网页内容
        const $ = cheerio.load(html);

        // 定义一个数组来存储热榜信息
        const hotList = [];

        // 遍历表格中的每一行
        $('table tr').each((index, element) => {
            // 跳过表头行
            if (index === 0) return;

            // 提取排名、标题、热度和链接
            const rank = $(element).find('td:nth-child(1)').text().trim();
            const title = $(element).find('td:nth-child(2) a').text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = 'https://tophub.today' + $(element).find('td:nth-child(2) a').attr('href');

            // 将提取的信息添加到数组中
            hotList.push({ rank, title, heat, link });
        });

        // 定义CSV写入器
        const csvWriter = createCsvWriter({
            path: 'weibo_hotlist.csv',
            header: [
                { id: 'rank', title: '排名' },
                { id: 'title', title: '标题' },
                { id: 'heat', title: '热度' },
                { id: 'link', title: '链接' }
            ]
        });

        // 将数据写入CSV文件
        csvWriter.writeRecords(hotList)
            .then(() => console.log('热榜信息已成功保存到 weibo_hotlist.csv 文件中'));
    })
    .catch(err => console.error(err));