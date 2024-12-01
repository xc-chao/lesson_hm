// Lesson_Hm/ai/openai/cursor/study_crawl/index.js
const fs = require('fs');
const csv = require('csv-parser');

// 读取 CSV 文件
const csvFilePath = 'web_hotList.csv';
const htmlFilePath = 'web_hotList.html';

// 基 URL
const baseUrl = 'https://tophub.today'; // 替换为实际的基 URL

let htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Web Hot List</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Web Hot List</h1>
    <table>
        <tr>
            <th>排名</th>
            <th>标题</th>
            <th>热度</th>
            <th>链接</th>
        </tr>
`;

// 解析 CSV 数据并生成 HTML 内容
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        // 确保 URL 是完整的
        const fullUrl = row.链接.startsWith('http') ? row.链接 : `${baseUrl}${row.链接}`;
        htmlContent += `
            <tr>
                <td>${row.排名}</td>
                <td>${row.标题}</td>
                <td>${row.热度}</td>
                <td><a href="${fullUrl}" target="_blank">链接</a></td>
            </tr>
        `;
    })
    .on('end', () => {
        htmlContent += `
    </table>
</body>
</html>
`;

        // 写入 HTML 文件
        fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
        console.log(`HTML 文件已生成: ${htmlFilePath}`);
    });