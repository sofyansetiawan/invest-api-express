const express = require('express')
const router = require('./routers/index')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
