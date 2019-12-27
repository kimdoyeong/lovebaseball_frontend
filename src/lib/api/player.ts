import client from "./client";
import apiWrap from "./apiWrap";

export function getPlayer(id: string) {
  return apiWrap(async () => {
    const req = await client.get(`/mlb/player/${id}`);
    return req.data;
  });
}
