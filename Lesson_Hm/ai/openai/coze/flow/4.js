// 生成随机的时间
function generateRandomTime() {
    const date = new Date();
    date.setFullYear(2023);
    date.setMonth(Math.floor(Math.random() * 12));
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    date.setSeconds(Math.floor(Math.random() * 60));
    const randomTime = date.toISOString().slice(0, -1);// ISO 8601格式的字符串
    return randomTime;
}
console.log(generateRandomTime());
