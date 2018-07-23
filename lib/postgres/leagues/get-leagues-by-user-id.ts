import * as pg from 'pg';
import dbPool from '../db';

type getLeagueResult = {
  rows: League[],
};

function getLeagues(userId: string): Promise<void | any[]> {
  return dbPool.connect()
    .then((client: pg.PoolClient) => {
      return client.query(`
        SELECT l.id, l.label, l.active, l.week, l.season_id, l.created_at FROM league l
        INNER JOIN user_league ul ON
          l.id = ul.league_id
        WHERE l.deleted_at IS NULL AND ul.user_id = $1;
      `, [userId])
      .then((resp: getLeagueResult) => {
        client.release();
        return resp.rows;
      })
      .catch((err) => {
        client.release();
        return err;
      });
    })
    .catch((err) => err);
}

export default getLeagues;
