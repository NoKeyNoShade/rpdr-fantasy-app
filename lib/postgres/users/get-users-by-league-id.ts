import * as pg from 'pg';
import dbPool from '../db';

interface GetUsersResult {
  rows: User[];
}

function getUsersByLeagueId(leagueId: string): Promise<string | User[]> {
  return dbPool.connect()
    .then((client: pg.PoolClient) => {
      return client.query(`
        SELECT u.id, u.email, u.first_name, u.last_name, ul.role FROM "user" u
        INNER JOIN user_league ul ON
          u.id = ul.user_id
        WHERE ul.deleted_at IS NULL AND ul.league_id = $1;
      `, [leagueId])
      .then((resp: GetUsersResult) => {
        client.release();
        return resp.rows;
      })
      .catch((err: string) => {
        client.release();
        return err;
      });
    })
    .catch((err: string ) => err);
}

export default getUsersByLeagueId;
