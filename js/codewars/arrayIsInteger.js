function isIntArray(arr) {
    if (arr === null || arr === undefined){
      return false
    } else if (arr.length < 1){
      return true
    }
    
    for (let i = 0; i < arr.length; i++){
      if (!Number.isInteger(arr[i])){
       return false 
      }
    }
    
    return true
  }