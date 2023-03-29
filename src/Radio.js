import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Radio(props) {
  const {
    groupname = "group",
    value = "Value",
    defaultchecked = false
  } = props;

  return (
    <div>
      <label>{value}</label>
      <input
        type="radio"
        name={groupname}
        value={value}
        defaultChecked={defaultchecked}
      />
    </div>
  );
}
