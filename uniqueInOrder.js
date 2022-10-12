function squareDigits(num){
    num = num.toString().split("");
    console.log(num)
    let newNum=[]
    for (let i=0; i<num.length ; i++){
      newNum.push(num[i]**2);
    }
    while (newNum.toString().includes(",")){
        newNum = newNum.toString().replace("," , "")
    }
    return parseInt(newNum)
  }