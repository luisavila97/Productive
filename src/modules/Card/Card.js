import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <button> + Add a card </button>
    </div>
  );
};

export default Card;
