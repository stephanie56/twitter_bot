console.log("The bot is starting...");

var Twit = require('twit');

// create a new twit instance to be used to make requests to twitter's APIs
var config = require('./config');
var T = new Twit(config);

// Data that I'm interested:
// data.user.screen_name;
// data.text;

function searchTweets (){
  var params = {
    q: 'Eurus, Sherrinford',
    count: 10,
    lang: 'en'
  };

  T.get('search/tweets', params, getTweets);

  function getTweets (err, data, response) {
    var tweets = data.statuses;
    var tweetId = tweets.map(function(data){
      return data.user.screen_name;
    });
    console.log(tweetId);
  }
}

searchTweets();
