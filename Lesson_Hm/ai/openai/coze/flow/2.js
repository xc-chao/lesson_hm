function generateRandomGender(){
    // return Math.random()>0.5?"男":"女"; // 三元运算符
    const genders = ["male","female"];
    return genders[Math.floor(Math.random()*genders.length)]; // 随机返回数组中的一个元素
}
