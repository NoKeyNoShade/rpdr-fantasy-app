import * as path from 'path';
import * as Express from 'express';

const router = Express.Router();

import apiRouter from './api';

router.use('/api', apiRouter);

router.get('*', (_req: Express.Request, res: Express.Response) => {
    res.sendFile(path.resolve('public/index.html'));
});

export default router;
