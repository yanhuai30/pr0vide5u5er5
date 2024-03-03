const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the local farmers market directory!');
});

app.get('/markets', (req, res) => {
  // 返回所有的农贸市场信息
});

app.get('/markets/:id', (req, res) => {
  // 返回指定 ID 的农贸市场信息
});

app.get('/vendors', (req, res) => {
  // 返回所有的卖家信息
});

app.get('/vendors/:id', (req, res) => {
  // 返回指定 ID 的卖家信息
});

app.get('/products', (req, res) => {
  // 返回所有的产品信息
});

app.get('/products/:id', (req, res) => {
  // 返回指定 ID 的产品信息
});

app.get('/events', (req, res) => {
  // 返回所有的活动信息
});

app.get('/events/:id', (req, res) => {
  // 返回指定 ID 的活动信息
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});