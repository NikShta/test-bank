import React from "react";
import {Link} from "react-router-dom";

import styles from "./styles.module.scss";

const PageNotFound: React.FC = () => (
  <div className={styles.wrapper}>
    <h1>Page not found</h1>
    <Link to={"/"}>Go to Main</Link>
  </div>
);

export default PageNotFound;
