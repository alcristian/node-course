const fs = require('fs')
//creating object have properties
/*const book = {
    title: 'Ego is the Enemy', 
    author: 'Ryan Holiday'
}*/

//const bookJSON= JSON.stringify(book) //json is just extract strings from the object

//console.log(bookJSON)//return as a string
//bookJSON.author is not accecible because is just a string
//const parseData = JSON.parse(bookJSON) //parse method return the object stored in the json file
//console.log(parseData.author)//will work because is a object parsed from the JSON file
//fs.writeFileSync('1-json.json',bookJSON)


const dataBuffer = fs.readFileSync('1-json.json')//first we have the binary data
const dataJSON = dataBuffer.toString()//convert binary data into a string
const data = JSON.parse(dataJSON)//convert the string to a Object
console.log(data)//now we can access the proporties from a JSON

//change properties from the object
data.name = 'Cristian'
data.age = 37
//transform the object into a String
const inputNewData = JSON.stringify(data)
//input a new string on the JSON dataset
fs.writeFileSync('1-json.json',inputNewData)
