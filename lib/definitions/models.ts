declare type League = {
  id: string,
  label: string,
  active: boolean,
  week: number,
  season_id: string,
  created_at: string,
};

declare type User = {
  id: string,
  email: string,
  first_name: string,
  last_name: string
  created_at: string,
};

declare type UserLeague = {
  role: string,
  user_id: string,
  league_id: string,
  created_at: string,
};
