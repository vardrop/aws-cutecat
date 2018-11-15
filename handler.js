'use strict';

const got = require('got')
const api = require('./.api.json')

module.exports.cutecat = async (event, context, callback) => {
  const randomgif = await got('https://api.giphy.com/v1/gifs/random?api_key=' + api.key + '&tag=cute&tag=cat&rating=g&limit=1', {
    json: true
  })
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: '<img src="' + randomgif.body.data.images.original.url.toString() + '" />'
  })
}
