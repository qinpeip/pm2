const http = require('http')

const app = http.createServer((req, res) => {
  res.end('hello, world')
})


app.listen(1111, () => {
  console.log('the serve is run 1111')
})
