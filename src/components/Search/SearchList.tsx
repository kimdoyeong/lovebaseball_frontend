import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  min-height: 300px;
  max-height: 80vh;
  overflow-y: auto;

  .center {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .player {
    all: unset;
    margin: 1em 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    .profile {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      border-radius: 30px;
    }
    .name {
      margin: 0;
    }
  }
`;
function SearchElement({ fullName, code }: { fullName: string; code: string }) {
  return (
    <Link className="player" to={`/player/${code}`}>
      <div
        className="profile"
        style={{
          background: `url(https://content.mlb.com/images/headshots/current/60x60/${code}.png) no-repeat`
        }}
      />
      <h1 className="name">{fullName}</h1>
    </Link>
  );
}
function SearchList() {
  const { data, fetching } = useSelector((state: RootState) => state.search);
  return (
    <Wrap>
      {!data.length && !fetching && (
        <div className="center">검색 결과가 없습니다.</div>
      )}
      {fetching && <div className="center">검색 중...</div>}
      {data.length !== 0 && (
        <div className="players">
          {data.map((d, i) => (
            <SearchElement fullName={d.fullName} code={d.code} key={i} />
          ))}
        </div>
      )}
    </Wrap>
  );
}
export default SearchList;
