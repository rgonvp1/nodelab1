const csv=require('csvtojson')
const fs = require('fs')
const path =require('path')
const baseFileName = 'customer-data'
const csvFilePath= baseFileName +'.csv'

//define array to add converted records
let recordArray = []
counter = 0
//iterate through file
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    recordArray.push(jsonObj)
    counter++
})
.on('done',(error)=>{
    if(error){
        return console.log(`Error processing ${csvFilePath}`)
    }
    var jsonString = JSON.stringify(recordArray)
    fs.writeFileSync(path.join(__dirname, baseFileName +'.json'),  jsonString);
    console.log(`finished processing of file ${csvFilePath}`)
})