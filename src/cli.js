
let path = require('path');
let folder = path.resolve('./input-files/');
let fs = require('fs');

const cache = {};

//parse each input file, read data and pass data to be formated
function fileParser (){
  fs.readdir(folder, {encoding: 'utf8'}, (err, files)  => { 
  if (err) { 
    console.log("ERROR", err); throw err; 
  } else {
    //reads file and returns file's data as a string
    files.forEach(file => {
      fs.readFile(path.resolve('./input-files' , file),{encoding:'utf8', flag:'r'}, 
        function (err, data) {
        if(err) 
          console.log(err);
        else
          //call formatData function passing in the string data
          return formatData(data);
        });      
      });
    };
  });
};

function formatData(data){
//creates an array of 3 strings and stores them under arrOfStrings label˜
  let arrOfStrings =  data.split(/\r?\n/)
  console.log('test',arrOfStrings)

  for(let str = 0; str < arrOfStrings.length; str++){
    for(let i = 0; i < arrOfStrings[str].length; i++){
      if (arrOfStrings[str][i]  === ',' || arrOfStrings[str][i] === '|'){
        formatPipeComma(arrOfStrings[str])
        break;
      }
    }
  }
//remove middle intials
//format date
//swap last 2 in order in pipe and comma
//format output
}

function removeMI (str) {

}
 function formatPipeComma (str) {
  console.log('here' ,str)
 }

 
console.log(fileParser())

exports.fileParser = fileParser
