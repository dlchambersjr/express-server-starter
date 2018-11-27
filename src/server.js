// Load Express Framework
import express from 'express';

// Load local middleware
import router from './routes.js';
import notFound from './middleware/404.js';
import error from './middleware/error.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Process incoming through the routers
app.use(router);

//use local middleware
app.use(notFound);
// app.use(error);

let server;

module.exports = {
  app,
  startDB: (port) => {
    server = app.listen(port, () => console.log(`EXPRESS SERVER STARTER Listening on PORT: ${port}`));
    return server;
  },
  stopDB: () => {
    server.close(() => {
      console.log('Server has been stopped');
    });
  },
};