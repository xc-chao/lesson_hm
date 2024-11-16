function traverse(arr) {
    const outLen = arr.length // 1
    for (let i = 0; i < outLen; i++) { // 1+n+1+n
      const inLen = arr[i].length // n
      for (let j = 0; j < inLen; j++) { // n + n(n+1) + n*n
        console.log(arr[i][j])// n*n
      }
    }
  }

  // 1+1+n+1+n+n+n+n+n*n+n*n+n*n=T(3n+3n*n+3)=O(n*n)
  // O(n^2) 把握主要矛盾， 忽略次要，系数不重要
  traverse();