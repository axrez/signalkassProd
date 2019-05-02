const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const next = require('next');

const db = require('./config/keys').mongoURI;

const device = require('./routes/api/device');
const client = require('./routes/api/client');

// Prepare next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    // Init express
    const server = express();

    // Enforce https in production
    if (!dev) {
      server.use((req, res, next) => {
        // Make sure the request is https
        const proto = req.headers['x-forwarded-proto'];
        if (proto === 'https') {
          // Set the max age of a security token to 1 year
          res.set({
            'Strict-Transport-Security': 'max-age=31557600',
          });
          return next();
        }
        // If the request is not https redirect to https
        res.redirect(`https://${req.headers.host}${req.url}`);
      });
    }

    // BodyParser middelware
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    server.use(bodyParser.json({ limit: '50mb', extended: true }));

    // mongoose middelware
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => console.log('Database connected'))
      .catch(err => console.log(err));

    // Allow access to api endpoints
    server.use('/api/device', device);
    server.use('/api/client', client);

    // Handle all other requests
    server.get('*', (req, res) => handle(req, res));

    // Prepare and start the server
    const port = process.env.PORT || 3000;
    server.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(err => console.log(err));
