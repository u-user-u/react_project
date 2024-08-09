import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import { Title } from './views/title';
import { Register } from "./views/register";
import { Load } from "./views/load";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const StyledTitlePage = styled.div`
  background-color: black;
  display: block;
  height: 100%;
`

const TitlePage = () => {
  return (
    <StyledTitlePage>
      <Router>
        <Route exact path="/title">
          <Title />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/load">
          <Load />
        </Route>
        <Route exact path="/ranking">
          {/*<Ranking />*/}
        </Route>
        <Redirect to="/title" path="*" />
      </Router>
    </StyledTitlePage>
  );
}

if (document.getElementById("title")) {
  ReactDOM.render(
    <TitlePage />,
    document.getElementById("title")
  );
}
