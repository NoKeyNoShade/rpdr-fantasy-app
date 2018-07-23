import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import router from './router';

const app = express();
const port: string = process.env.PORT || '3000';
const env: string = process.env.NODE_ENV || 'development';

app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (env === 'development') {
    app.enable('verbose errors');
    app.locals.pretty = true;
    // Graphiql hits api/graphql, so the request must come from the logged in user.
    app.use('/graphiql', (_req, res) => {
      res.sendFile(path.resolve('./graphiql/index.html'));
    });
  }

app.use(express.static(`${__dirname}/..`));
app.use('/', router);

app.listen(port, () => {
    console.log((`App is running at http://localhost:${port} in dev mode`));
    console.log('Press CTRL-C to stop\n');
});