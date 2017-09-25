'use strict';
module.exports ={
  aritGeo(arr){
    if(arr.length ===0){
      return 0;
    }
    if(arr.every(num=> num.constructor !==Number)){
      return -1;
    }
    let hold_CD=[]
    let hold_CM=[]
    for(let i=0; i<arr.length-1; i++){
      let commonDiff =arr[i+1] - arr[i]
      hold_CD.push(commonDiff);
      let commonDiv = arr[i+1] / arr[i]
      hold_CM.push(commonDiv);
    }
    let uniqueCD = new Set(hold_CD)
    if(uniqueCD.size ===1){
      return 'Arithmetic';
    }
    let uniqueCM = new Set(hold_CM);
    if(uniqueCM.size ===1){
      return 'Geometric'
    }else{
      return -1;
    }
  }
}
  
    