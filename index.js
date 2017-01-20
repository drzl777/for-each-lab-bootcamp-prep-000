function iterativeLog(array){
  array.forEach((ele, index) => {
    console.log(`${index}: ${ele}`)
  })
}

function iterate(callback){
  var dummy = [1,2,3]
  dummy.forEach(callback)
  return dummy
}

function doToArray(array,callback){
  array.forEach(callback)
}