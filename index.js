const express = require('express')
const Jimp = require('jimp')

console.log(process.env.PORT)

const app = express()

app.listen(3000, () => {
  console.log("App usando puerto ", process.pid)
})

app.get("/", async (req, res) => {
  const img = await Jimp.read("https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg")
  await img
    .resize(250, Jimp.AUTO)
    .sepia()
    .writeAsync("img.png")

  res.setHeader("Content-Type", "image/png")
  res.sendFile(__dirname + "/img.png")
})
