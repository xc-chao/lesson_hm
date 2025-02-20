var lengthOfLongestSubstring = function(s){
    // 双指针
    let left = 0
    let right = 0
    let maxLength = 0
    // 连续的字符串
    let charSet = new Set() // 使用 Set 来存储字符
    while(right<=s.length-1){
        if(!charSet.has(s[right])){
            charSet.add(s[right])
            right++
            maxLength = Math.max(maxLength,right-left)
        }else{
            // 左指针右移
            charSet.delete(s[left])
            left++
        }
    }
    return maxLength
}
console.log(lengthOfLongestSubstring("abcabcbb"))