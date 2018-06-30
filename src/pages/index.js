import React from "react";
// import Link from "gatsby-link";
import Button from "../components/Button";

import "./index.css";

const IndexPage = () => (
  <div styleName="root">
    <h1 styleName="header">Ocorrência</h1>
    <div styleName="main">
      <Button message="Incêndio Urbano" />
      <Button message="Incêndio Florestal" />
      <Button message="Desencarceramento" />
      <Button message="Emergência Médica" />
      <Button message="Transporte" />
    </div>
  </div>
);

export default IndexPage;
