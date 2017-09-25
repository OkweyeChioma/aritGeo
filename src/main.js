'use strict';
module.exports ={
  function aritGeo(arr){
    let hold_CD =[]
  let hold_CM =[]
  if(arr.length ===0){
    return 0
  }
  let bb = arr.every(x=> x.constructor ===Number)
    if(!bb){
      return -1;
    }
  for(let i=0;i<arr.length -1; i++){
    let commonDiff = arr[i+1] - arr[i]
    hold_CD.push(commonDiff)
    
    commonMult = arr[i+1] / arr[i]
    hold_CM.push(commonMult)
    
  }
  let uniqueCD = new Set(hold_CD)
  if(uniqueCD.size ===1){
    return 'Arithmetic'
  }
  let uniqueCM = new Set(hold_CM)
  if(uniqueCM.size ===1){
    return 'Geometric'
  }else{
    return -1
  }
  
  
}
  }
}
