// cwang138: how to run. 
// npm install twit
// node test.js

var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'zo9oPYlsyQc6OLso205oRfEXH',
  consumer_secret:      '7QIit56fbS3GJ1qIbKiJkY1rLFEcuqLBirTpDBvl9s4CCx4WBM',
  access_token:         '707770026573561856-W7ZMOpIm4VoPeyOQrkUNTK4QxED1SeI',
  access_token_secret:  'BGonPtlFlhxxaO6aTrwHK53enUnhZr5GJQDMX16tmKiNn',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

/************************************************************************/
/*     		with geolocation filter(double filtered):                                        
		1st: 214 tweets/per minute
		2nd: 210 tweets/per minute
		
			without geolocation filter :
		1st: 1342 tweets/per minute
		2nd: 1424 tweets/per minute
		
			sample method instead of filter :
		1st: 3036 tweets/per minute
		2nd: 2974 tweets/per minute
		
			sample method add language filter :
		1st: 907 tweets/per minute
		2nd: 1019 tweets/per minute
		
*/
/*************************************************************************/

// testing how many tweets will get in one minute!


// with Geolocation filter
/*num = 1;
var stream = T.stream('statuses/filter', { locations: ['-127.33,23.34,-55.52,49.56'] })
var stopIfAfter = Date.now() + 60000;  //60s
stream.on('tweet', function (tweet) {
       if (tweet.coordinates){
            if (tweet.coordinates !== null){ 
				num += 1;
				console.log('current tweet num: ' + num);
          }
        }
		if (Date.now() > stopIfAfter){
			process.exit(1);
		}
});*/



// without Geolocation filter
/*num = 1;
var stream = T.stream('statuses/filter', { locations: ['-127.33,23.34,-55.52,49.56'] })
var stopIfAfter = Date.now() + 60000;  //60s
stream.on('tweet', function (tweet) {
	num += 1;
	console.log('current tweet num: ' + num);

	if (Date.now() > stopIfAfter){
		process.exit(1);
	}
});*/



// use sample with no filter!
// which means getting tweets from alllllll ovvvverrrr the worlddd with different language!!
/*num = 1;
var stream = T.stream('statuses/sample');
var stopIfAfter = Date.now() + 60000;  //60s
stream.on('tweet', function (tweet) {
	num += 1;
	console.log('current tweet num: ' + num);

	if (Date.now() > stopIfAfter){
		process.exit(1);
	}
});*/


// use sample first 
// then add filter
// filter by language?
num = 1;
var stream = T.stream('statuses/sample');
var stopIfAfter = Date.now() + 60000;  //60s
stream.on('tweet', function (tweet) {
	if (tweet.lang){
            if (tweet.lang === 'en'){ 
				num += 1;
				console.log(tweet.text);
          }
        }
		
	if (Date.now() > stopIfAfter){
		console.log('current tweet num: ' + num);
		process.exit(1);
	}
});





