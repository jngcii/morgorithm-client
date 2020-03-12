import React from 'react';
import classNames from 'classnames/bind';
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

function App() {
  const isit = false;

  return (
    <div className={cx('test', {red: isit})}>
      morgorithm
    </div>
  );
}

export default App;
