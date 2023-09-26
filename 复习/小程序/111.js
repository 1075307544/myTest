function deepClone(old){
  if(typeof old === 'object' && old !== null){
    let newV
    if(old instanceof Array){
      for(let i = 0; i < old.length; i+=){
        newV[i] = deepClone(old[i])
      }
    }else if(old instanceof RegExp){
      newV = new Reg(old.source,old.flags)
    }else if(old instanceof Date){
      newV = new Date(old)
    }else {
      for(let key in old){
        newV[key] = deepClone(old[key])
      }
    }
    return newV
  }else {
    return old
  }
}