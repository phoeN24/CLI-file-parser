
let path = require('path');
let folder = path.resolve(__dirname, '../input-files');
let fs = require('fs');

const cache = {};

const cachesss = {
  person1: {
    name: 'Kournikova Anna',
    dob: '3/3/1984'
  },
  person2: {
    name: 'Lee Lina',
      dob: '1/1/1999'
  },
  person3: {
    name: 'Best Katrina',
      dob: '7/7/7777'
  }
}

let filepath;

function fileParser (){
  fs.readdir(folder, function (err, data) { 
  if (err) { 
    console.log("ERROR", err); throw err; 
  } console.log(data) ;
  })
} 

console.log(fileParser())



exports.fileParser = fileParser
// reads file snd stores data to cache
  // fs.readFile( '/Users/phoenix/Desktop/def-method-code-test-input-files/space.txt' , 'utf-8', function (err, data)  {
  //   const content = data; 
  //   console.log(content);
  // });
  

//function sortData(cache, sortArg){
  //sort data by sortArg return as an array
//}

// function parseArgs(inputArgs){
//   const args = arg(
//     {
//       //takes argument from command line and processes into options
//     '--gender' : String,
//     '--birthdate' : String,
//     '--lastName' : String,
//     '--g' : '--gender',
//     '--b' : '--birthdate',
//     '--ln' : '--lastName'
//   },
//   {
//     //arguments we want arg to use
//     argv : inputArgs.slice(2),
//   }
//   );
//   return {
    
//   }
// }

// export function cli (args){
//   console.log(args)
// }
