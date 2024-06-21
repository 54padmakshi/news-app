// functions/fetchNews.js

const axios = require('axios');

exports.handler = async (event, context) => {
  const API_KEY = 'd111530a0e954666adf9d7a3f8574faa';
  const BASE_URL = 'https://newsapi.org/v2/everything';
  const { q, page } = event.queryStringParameters;

  const url = `${BASE_URL}?apiKey=${API_KEY}&q=${q}&page=${page}&pageSize=10`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};

