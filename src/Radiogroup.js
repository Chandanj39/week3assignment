import "./styles.css";
import { userState } from "react";
import Radio from "./Radio";

export default function Radiogroups(props) {
  const {
    values = ["Latte", "espresso"],
    groupName = "group",
    defaultcheckedindex = 0
  } = props;

  return (
    <div>
      {values.map((value, i) => {
        return (
          <Radio
            value={value}
            groupName={groupName}
            defaultcheckedindex={defaultcheckedindex === i}
          />
        );
      })}
    </div>
  );
}
