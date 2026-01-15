// src/app.ts
import express, { Application, Request, Response } from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const app: Application = express();
const server = createServer(app);

const port: number = 4600;

const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

const ROOM = 'group'
io.on('connection', (socket) => {

  socket.on('joinRoom', async (userName : string)=> {

        await socket.join(ROOM)

        // broadcast the notice
        socket.to(ROOM).emit('roomNotice', userName)

        
  })

  socket.on('chatMessage', (msg: any)=> {
    socket.to(ROOM).emit('chatMessage', msg)
  })

  socket.on('typing', (userName: string)=> {

      socket.to(ROOM).emit("typing", userName)
  })

  socket.on('stopTyping', (userName: string)=> {

    socket.to(ROOM).emit("stopTyping", userName)
})

});

// Define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript and Express!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
