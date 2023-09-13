import express from "express"


export const app = express()

const PORT = 3000

app.use(
  express.urlencoded({
      extended: true
  })
)

app.use(express.json())

app.listen(PORT,() => {
  console.log("Servidor rodando na porta "+ PORT)
})