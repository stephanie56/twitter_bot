console.log("The bot is starting...");

var Twit = require('twit');

/* Create a new twit instance to be used to make requests to twitter's APIs. */
var config = require('./config');
var T = new Twit(config);

/** to update status **/
T.post('statuses/update', { status: 'Hey, miss me? #SherlockLive' }, function(err, data, response) {
  console.log(data)
})

/** to search for tweets **/
T.get('search/tweets', { q: 'Eurus since:2016-01-10', count: 50 }, function(err, data, response) {
  console.log(data)
})
