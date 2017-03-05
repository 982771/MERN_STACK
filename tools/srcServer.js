//https://github.com/StevenIseki/react-router-redux-example
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import mongoose from 'mongoose';
import serverConfig from './config';
import posts from '../appServer/routes/routes';
import { match} from 'react-router';
import bodyParser from 'body-parser';
import dummyData from './dummData'

/* eslint-disable no-console */
import routes from '../src/routes';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
    dummyData();
   console.log("Connected to MongoDB");
});
//app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/api', posts);
// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    res.sendFile(path.join( __dirname, '../src/index.html'));
   
  });
});



app.listen(serverConfig.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${serverConfig.port}`);
  }
});
