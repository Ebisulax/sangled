function decrypt(encryption) {
    let result=BigInt(0);
    let TEN = BigInt(10);
    let TWESIX = BigInt(26);
    let NINSEV = BigInt(97)
      for (let i=97; i<=122;i++){
          let letter = String.fromCharCode(i);
          let count=0
          for (let j=0; j<encryption.length; j++){
              let pos = encryption[j]
              if (letter===pos){
                  count++
              }
          }
          result = result + BigInt(count) *(TEN ** (TWESIX + NINSEV - BigInt(i+1)));
      }
       return result.toLocaleString('fullwide', {useGrouping: false})
  }