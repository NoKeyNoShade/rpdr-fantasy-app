import * as PG from 'pg';

const config: PG.PoolConfig = {
  user: 'garrett',
  host: 'localhost',
  database: 'drag_race_fantasy',
  password: '',
  port: 5432,
};

export default new PG.Pool(config);

