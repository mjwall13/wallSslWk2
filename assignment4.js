const fs = require('fs');

// var http = require('htt');
var http = require('http');

// var myname = functon
function myname(){
  console.log("Here is my IP address");
}

function callHttpbin() {
//   let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);

      myips = result.origin;
      resolve();
     });
     }
    );
// });

// let result = await promise;
result;
};
async function executeAsyncTask(){
  const valueA = callHttpbin();
  const valueB = myname();

  let promise = new Promise((resolve, reject) => {
    fs.readFile('myfile.txt', 'utf-8', (err, data) => {
    if (err) throw err;
      resolve(data)
    });
  });
  
  let result = await promise;

  console.log(valueB+" "+valueA)
// Output Here is my IP address 149.24.160.1, 149.24.160.1
} executeAsyncTask();