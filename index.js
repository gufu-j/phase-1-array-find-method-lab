// code your solution here
// returns a year the Denver Broncos Won the Superbowl

//array.prototype.find()

//record.result.find()


function callback(record) {
  console.log("record", record)
  return record.result === "W"
}


function superbowlWin(record) {
  let found = record.find(callback)
  if (found){
    return found.year
  }
  
  
  console.log("found",found)
}  






