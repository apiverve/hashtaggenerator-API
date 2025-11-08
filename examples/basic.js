/**
 * Basic Example - Hashtag Generator API
 *
 * This example demonstrates how to use the Hashtag Generator API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const hashtaggeneratorAPI = require('../index.js');

// Initialize the API client
const api = new hashtaggeneratorAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "text": "Adventure awaits 🌍✈️ Who's ready to embark on a journey of a lifetime? Whether you're exploring exotic landscapes, immersing yourself in vibrant cultures, or simply indulging in delicious cuisines, there's something magical about travel that fills the soul with joy and wonder. Let's wander together and create unforgettable memories! 🌟",
  "count": 5
};

// Make the API request using callback
console.log('Making request to Hashtag Generator API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
