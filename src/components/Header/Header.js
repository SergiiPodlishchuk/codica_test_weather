import React from "react";

import s from "./Header.module.css";

export default function Header() {
  const timeNow = new Date().toLocaleDateString();
  return (
    <header>
      <h2 className={s.mainTitle}>Weather per city</h2>
      <h3>{timeNow}</h3>
    </header>
  );
}
