import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducer";
import { SearchDispatchers } from "../../store/search";
import Button from "../Form/Button";
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.5em 1em;
`;
function SearchForm() {
  const { search } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const setSearch = useCallback(
    (e: string) => dispatch(SearchDispatchers.searchInput(e)),
    [dispatch]
  );
  const searching = useCallback(() => dispatch(SearchDispatchers.search()), [
    dispatch
  ]);
  return (
    <div>
      <h1>Search MLB Players</h1>
      <form
        style={{ display: "flex" }}
        onSubmit={e => {
          e.preventDefault();
          searching();
        }}
      >
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button style={{ marginLeft: 10 }}>검색</Button>
      </form>
    </div>
  );
}

export default SearchForm;
