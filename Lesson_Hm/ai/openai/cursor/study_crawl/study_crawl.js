const request = require('request-promise');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 目标网址
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送请求并解析HTML
request(url)
    .then(html => {
        const $ = cheerio.load(html);
        const hotList = [];

        // 解析表格中的数据
        $('table tbody tr').each((index, element) => {
            const rank = $(element).find('td:nth-child(1)').text().trim();
            const title = $(element).find('td:nth-child(2) a').text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = $(element).find('td:nth-child(2) a').attr('href');

            hotList.push({ rank, title, heat, link });
        });

        // 将数据写入CSV文件
        const csvWriter = createCsvWriter({
            path: 'web_hotList.csv',
            header: [
                { id: 'rank', title: '排名' },
                { id: 'title', title: '标题' },
                { id: 'heat', title: '热度' },
                { id: 'link', title: '链接' }
            ]
        });

        csvWriter.writeRecords(hotList)
            .then(() => {
                console.log('数据已成功写入 web_hotList.csv');
            })
            .catch(err => {
                console.error('写入CSV文件失败:', err);
            });
    })
    .catch(err => {
        console.error('请求失败:', err);
    });