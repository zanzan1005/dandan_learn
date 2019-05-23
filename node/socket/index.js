import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'

const app = express()

app.set('view', path.resolve(__dirname, 'view'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.get('/', (request, response) => {
  response.render('index')
})

let server = app.listen(3000, () => {
  console.log('Listen port: 3000')
})

let io = socketIO(server)

io.on('connection', (socket) => {
  console.log('connected')
  socket.on('disconnected', () =>{
    console.log('disconnected')
  })
  socket.on('message',(msg) => {
    io.emit('message', msg)
  })
})
