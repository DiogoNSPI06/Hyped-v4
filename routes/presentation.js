const express = require('express');
const db = require('quick.db')
var router = express.Router();
//req.params.id
///home/runner/Hyped-V40-1/routes/html/

router.get('/', function(req, res) {
  res.sendFile("/home/runner/Hyped-V40-1/routes/html/PPhome.html");
});

router.get('/create/:id', function(req, res) {
  db.set(`SessionID_${req.params.id}`, true)
  
  res.sendFile("/home/runner/Hyped-V40-1/routes/html/PPCreate.html");
});

router.post('/create/:id', function(req, res) {
  db.set(`PowerPointPage_${req.params.id}`, req.body.answer1)
  db.set(`PowerPointPage2_${req.params.id}`, req.body.answer2)
  db.set(`PowerPointPage3_${req.params.id}`, req.body.answer3)
  db.set(`PowerPointPage4_${req.params.id}`, req.body.answer4)
  db.set(`PowerPointPage5_${req.params.id}`, req.body.answer5)

  res.send(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title> HYPED | Apresentador </title>
    <link rel="shortcut icon" href="https://static.wixstatic.com/media/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png" type="image/png">
  </head>
  <body>
    <style>
      textarea {
        background-color: #2f3136;
        border: 1px solid #000;
        color: #99aab5;
        padding: 8px;
        font-family: courier new;
        position: center;
      }
    
      body {
        background-color: #36393f;
        text-align: center
      }
    
      input {
        background-color: #2f3136;
        color: #ffffff;
      }
    
      button {
        background-color:#5865f2;
        border: none;
        cursor:pointer;
        color:#d0d8fa;
        font-family:Arial;
        font-size:17px;
        padding:7px 8px;
        text-decoration:none;
      }
      button:active {
        position:relative;
        top:1px;
      }
      h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "DroidSans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 25vh
      }
    </style>
    <h1> Encurtador HYPED </h1>
    <h1>Veja sua apresentação:</h1>
    <button id="presentation" class="button"> Clique Aqui! </button>
    <h1>Controle sua Apresentação:</h1>
    <button id="control" class="button"> Clique Aqui! </button>
    <script>
      document.getElementById('presentation').addEventListener("click", redirect)
      document.getElementById('control').addEventListener("click", redirectControl)
      function redirect() {
       window.location.replace("https://v4.hypeds.com/api/presentation/${req.params.id}/1");
      }
      function redirectControl() {
        window.location.replace("https://v4.hypeds.com/api/control/${req.params.id}");
      }
    </script>
  </body>
</html>`)
})

router.get('/:id/view/:pg', function(req, res) {
  let SSID = db.get(`SessionID_${req.params.id}`)

  if(!SSID) return req.json({ message: `Invalid Request. The following ID is invalid.` })
  
  let src1 = db.get(`PowerPointPage_${req.params.id}`)
  
  res.send(`<img src="${src1}" alt="Italian Trulli">`)
});

module.exports = router;