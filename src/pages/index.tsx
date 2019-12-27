import React from "react";
import loadable from "@loadable/component";
import { Route, Switch, RouteProps } from "react-router-dom";
import MainCard from "../components/MainCard";

const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("./IndexPage"))
  },
  {
    path: '/player/:id',
    exact: true,
    component: loadable(() => import('./PlayerPage'))
  }
];

function Pages() {
  return (
    <MainCard>
      <Switch>
        {routes.map((d, i) => (
          <Route key={i} {...d} />
        ))}
      </Switch>
    </MainCard>
  );
}

export default Pages;
