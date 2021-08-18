const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const client_id = 'U9aVaJCeqgiSmYwr9d1f';
const client_secret = 'rlCXisFeXP';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/translate',(req,res) => {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const request = require('request');
  const options = {
    url: api_url,
    form: {'source':'ko', 'target':'en', 'text':req.body.title},
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
  };

  request.post(options, function (error, response, body) {
    const text = JSON.parse(body);
    
    if (!error && response.statusCode == 200) {
      res.send(text.message.result.translatedText);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

app.listen(process.env.PORT || 5000, function () {
  console.log(`Server is Running on ${process.env.PORT || 5000}`);
});
