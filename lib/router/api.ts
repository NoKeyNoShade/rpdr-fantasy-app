import * as Express from 'express';
import * as graphqlHTTP from 'express-graphql';
import schema from '../schemas';

const router: Express.Router = Express.Router();

router.post('/graphql', graphqlHTTP(req => ({
    context: {
        reqURL: req.url,
    },
    schema,
})));

export default router;
