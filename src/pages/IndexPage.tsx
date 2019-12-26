import React from "react";
import FullSizePlayerList from "../components/Player/FullSizePlayerList";

function IndexPage() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="MVP">
          🏆
        </span>{" "}
        Most Valuable Players
      </h1>
      <FullSizePlayerList />
    </div>
  );
}

export default IndexPage;
