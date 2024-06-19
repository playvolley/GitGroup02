const express = require('express');

const app = express();


app.use('/login', (req, res, next) => {
  res.status(200).json({ msg: 'login successfully' });
});

app.use("/register", (req, res, next) => {
  res.send({ msg: "register....." });
});

app.listen(8888, () => {
  console.log('server on 8888');
});
