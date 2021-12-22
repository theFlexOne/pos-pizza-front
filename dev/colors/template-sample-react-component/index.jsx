import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function TemplateSampleReactComponent() {
  return <div className={cx("template-sample-react-component")}>Hello :)</div>;
}

export default TemplateSampleReactComponent;
