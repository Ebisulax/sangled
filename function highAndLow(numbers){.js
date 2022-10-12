function highAndLow(numbers){
    let numArr = numbers.split(" ")
    let low=Infinity;
    let high=-11111110;
    
    for (let i=0; i<numArr.length; i++){
        
        if (parseInt(numArr[i])<parseInt(low)){
            low = parseInt(numArr[i])
        }
        if (parseInt(numArr[i])>parseInt(high)){
            high = parseInt(numArr[i])
        }
        console.log(high +" "+ low)
    }

        return high.toString()+" "+low.toString()

};