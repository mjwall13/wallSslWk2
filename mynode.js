//  var fs = require("fs");

// fs.readFile("myfile.txt", "utf8",function(err, contents){
//     console.log(contents);
// })

// fs.writeFile("myNodeFile.txt", "Test String", "utf8",function(err){
//     console.log("done");
// })

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    ouput:process.stdout
});

rl.question('Please enter student name: ',(name)=>{
    rl.question("Please enter assignment name: ",(assignment)=>{
        rl.question("Please enter the numeric grade: ",(grade)=>{
            var parsedGrade = parseInt(grade);

            if (parsedGrade >= 90){
                console.log(name+", you received an A on assignment "+assignment+". Grade Details: You met all of the requirements.");
                rl.close();
            } else if (parsedGrade >= 80){
                console.log(name+", you received a B on assignment "+assignment+". Grade Details: You were missing some requirements.");
                rl.close();
            } else if (parsedGrade >= 70){
                console.log(name+", you received a C on assignment "+assignment+". Grade Details: You were missing significant requirements.");
                rl.close();
            }else if (parsedGrade >= 60){
                console.log(name+", you received a D on assignment "+assignment+". Grade Details: You were missing most requirements.");
                rl.close();
            }else {
                console.log(name+", you failed assignment "+assignment+". Grade Details: You failed to meet minimum requirements.");
                rl.close();
            }
        })
    })
})
