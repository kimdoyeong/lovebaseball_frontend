import client from "./client";
import apiWrap from "./apiWrap";

export function getPlayer(id: string) {
  return apiWrap(async () => {
    const req = await client.get(`/mlb/player/${id}`);
    return req.data;
  });
}
export function searchPlayer(search: string) {
  return apiWrap(async () => {
    const req = await client.get(`/mlb/player/search?name=${search}`);
    return req.data.result;
  });
}
