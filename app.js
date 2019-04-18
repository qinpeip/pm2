const http = require('http')

const app = http.createServer((req, res) => {
  res.end('hello, world')
})


app.listen(80, () => {
  console.log('the serve is run 80')
})
