import * as pg from 'pg';
import dbPool from '../db';

type getUserResult = {
  rows: User[],
};

function getUserByID(userId: string): Promise<void | User[]> {
  return dbPool.connect()
    .then((client: pg.PoolClient) => {
      return client.query(`
        SELECT id, email, first_name, last_name, created_at FROM "user"
        WHERE id = $1;
      `, [userId])
      .then((resp: getUserResult): User[] => {
        client.release();
        return resp.rows;
      })
      .catch((err): string => {
        client.release();
        return err;
      });
    })
    .catch((err) => err);
}

export default getUserByID;
