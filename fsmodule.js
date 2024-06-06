const fs = require('fs')

// fs.read('raghavfilereading.txt' , 'utf8' , (err , data)=>{
//     console.log(err , data)
// })


//Writing in file - raghavwritingfile 
fs.writeFile("raghavwritingfile.txt" , "this is raghav text" , (err , data)=>{
    console.log("Writing in file is done")
});

console.log('finished with reading') 

