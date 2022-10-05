//@ts-check
/** 
 * run from root folder as : node ./npm-tests/test-02.js
 * 
 * Parse the response from the given REST end point and print out "hobbies" property in the following format: ITEM1, ITEM2, ...
 */
import https from "https";


https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', resp => {
    let data = "";;
    resp.on('data', function(chunk) {
        data += chunk;
    });    
    // parse json and print "hobbies" property as ITEM1, ITEM2,...
    resp.on('end', function() {
        if(data){
            let parsedItem = JSON.parse(data);
            console.log(parsedItem.hobbies);
        }
    });

})