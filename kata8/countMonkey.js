function monkeyCount(n) {
  let count =0
  let arr=[]
    for(let i=1;i<=n;i++){
    count++
    arr.push(count)
    //console.log(arr);
  }return (count, arr)
  }
  console.log(monkeyCount(5));