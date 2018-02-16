# YoutubeAPI-Node.js

This project demonstrates how to use "Youtube" API. We used npm package "youtube-node" in this project to work with Youtube API and get data from it.

## Installing youtube-node using npm
For use CLI need install youtube-node using -g param.
```$ npm install youtube-node -g```

## Accessing API
1) Import npm package in you file using require()
```var YouTube = require('youtube-node'); ```
2) Create instance for YouTube to access all of its methods by 
```var youTube = new YouTube();```
3) Set you API Key in this instance to get authorized inorder to access Youtube API's. In order to create your API Key please refer to this link https://developers.google.com/youtube/v3/getting-started
```youTube.setKey('');// Add your Youtube API key```
4) After setting API Key we can access Youtube API methods as -
-  search (search term, num results, params, callback) return object
-  getById (youtube id, result) return object
-  related (youtube id, maxResults, result) return object
5) We can directly access Youtube API without using npm package "youtube-node", but I used this package as it makes my task easy by simple methods.

## Displaying output
1) For example, we used search API in yotube to list matched data according to given string/ expression.
```youTube.search('Titanic Trailer', 2, function(error, result))```
2) Every API's use node callback feature to access result/ error. Catch error if any or process data to the output if success.
3) We diplayed output of search API using response object in node by send method.
```res.send(JSON.stringify(result))```
