var Twitter = require('twitter');
var request = require('request');

var client = new Twitter({
  consumer_key: '<consumer_key here>',
  consumer_secret: '<consumer_secret here>',
  access_token_key: '<access_token here>',
  access_token_secret: '<access_token_secret here>'
});
  
var searchTerm = '#hashTagYouWannaListenFor'; // eg. '#love'
console.log("Starting to stream. Listening for " + searchTerm);

 client.stream('statuses/filter', {track: searchTerm}, function(stream) {
  stream.on('data', function(tweet) {
    processTweet(tweet);
  });
  stream.on('error', function(error) {
    throw error;
  });
});

function processTweet(tweet) {
	/* TODO: process your tweet as you like it
	* this function just prints the twitter handle
	* and the tweeted text at present.
	*/
    console.log(tweet.user.screen_name + " : " + tweet.text);    
}
