const fs = require('fs')
const request = require('request');


const content = 'Some content!'

request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  fs.writeFile('/home/labber/work/w2/d3/page-fetcher2/fetch.txt', body, err => {
    if (err) {
      console.error(err)
      return
    }
  //file written successfully
}); // Print the HTML for the Google homepage.


});


