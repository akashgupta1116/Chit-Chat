// src/app.ts
import express, { Application, Request, Response } from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const app: Application = express();
const server = createServer(app);

const port: number = 4600;

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('connection is build');
});

// Define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript and Express!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
