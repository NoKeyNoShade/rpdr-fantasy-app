/// <reference path="../../definitions/models.ts" />
import * as pg from 'pg';
import dbPool from '../db';

type getLeagueResult = {
  rows: League[],
}

function getLeagues(): Promise<void | any[]> {
  return dbPool.connect()
    .then((client: pg.PoolClient) => {
      return client.query(`
        SELECT id, label, active, week, season_id, created_at FROM leagues
        WHERE deleted_at IS NULL;
      `)
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
