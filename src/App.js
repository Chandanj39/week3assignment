import "./styles.css";
import { motion } from "framer-motion";
import Input from "./Input";
import Radio from "./Radio";
import Radiogroup from "./Radiogroup";
import Checkbox from "./checlkbox";

const labelstyle = {
  position: "absolute",
  marginTop: 2,
  marginLeft: 25,
  fontSize: 16,
  fontFamily: "Roboto",
  color: "#555"
};

export default function App() {
  return (
    <div>
      <Input />
      <label style={labelstyle}>
        <Radiogroup
          groupname="condiments"
          value={["ketchup", "mustard"]}
          defaultcheckedindex={0}
        />
      </label>
    </div>
  );
}
