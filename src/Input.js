import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function input(props) {
  const { type = "text", label = "label" } = props;

  const [emailFocused, setEmailFocused] = useState(false);
  const [emailFilledIn, setEmailFilledIn] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordFilledIn, setPasswordFilledIn] = useState(false);
  const [textFocused, setTextFocused] = useState(false);
  const [textFilledIn, setTextFilledIn] = useState(false);
  const [passwordHovered, setPasswordHovered] = useState(false);

  const checkEmailFilledIn =
    (emailFocused && emailFilledIn) ||
    (emailFocused && !emailFilledIn) ||
    (!emailFocused && emailFilledIn);
  const checkPasswordFilledIn =
    (passwordFocused && passwordFilledIn) ||
    (passwordFocused && !passwordFilledIn) ||
    (!passwordFocused && passwordFilledIn);
  const checkTextFilledIn =
    (textFocused && textFilledIn) ||
    (textFocused && !textFilledIn) ||
    (!textFocused && textFilledIn);

  const inputstyle = {
    padding: "20px 20px",
    margin: "8px",
    display: "inline-block",
    background: "#e3e3e3",
    border: "1px solid #e3e3e3",
    borderBottom:
      emailFocused || passwordFocused || textFocused
        ? "4px solid #008B8B"
        : "none",
    boxsizing: "border-box",
    borderRadius: "4px",
    width: "200px",
    height: "15px"
  };

  // if (emailFocused) {
  //   inputstyle.borderBottom = "4px solid #008B8B";
  // } else if (passwordFocused) {
  //   inputstyle.borderBottom = "4px solid #008B8B";
  // } else if (textFocused) {
  //   inputstyle.borderBottom = "4px solid #008B8B";
  // } else {
  //   inputstyle.borderBottom = "none";
  // }

  const labelstyle = {
    position: "absolute",
    marginTop: 2,
    marginLeft: 25,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#555"
  };

  return (
    <>
      <div>
        <motion.label
          style={labelstyle}
          initial={{ y: 15 }}
          animate={{
            y: checkEmailFilledIn ? 8 : 20,
            scale: checkEmailFilledIn ? 0.75 : 1,
            color: checkEmailFilledIn ? "#008B8B" : "#A9A9A9"
          }}
        >
          {"Email"}
        </motion.label>

        <input
          type={type}
          style={inputstyle}
          onChange={(e) =>
            e.target.value !== ""
              ? setEmailFilledIn(true)
              : setEmailFilledIn(false)
          }
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          placeholder={emailFocused ? "Please enter your Email" : ""}
        />
      </div>

      <div>
        <motion.label
          style={labelstyle}
          initial={{ y: 15 }}
          animate={{
            y: checkPasswordFilledIn ? 8 : 20,
            scale: checkPasswordFilledIn ? 0.75 : 1,
            color: checkPasswordFilledIn ? "#008B8B" : "#A9A9A9"
          }}
        >
          {"Password"}
        </motion.label>

        <input
          type={type}
          style={inputstyle}
          onChange={(e) =>
            e.target.value !== ""
              ? setPasswordFilledIn(true)
              : setPasswordFilledIn(false)
          }
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          placeholder={passwordFocused ? "Please enter your Password" : ""}
          onMouseEnter={() => setPasswordHovered(true)}
        />
      </div>
      {passwordHovered && (
        <motion.div
          style={{
            color: "#008B8B",
            fontSize: 8,
            marginTop: -5,
            marginLeft: 12,
            fontFamily: "Roboto"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Password Field cannot contain numbers!
        </motion.div>
      )}

      <div>
        <motion.label
          style={labelstyle}
          initial={{ y: 15 }}
          animate={{
            y: checkTextFilledIn ? 8 : 20,
            scale: checkTextFilledIn ? 0.75 : 1,
            color: checkTextFilledIn ? "#008B8B" : "#A9A9A9"
          }}
        >
          {"Text"}
        </motion.label>

        <input
          type={type}
          style={inputstyle}
          onChange={(e) =>
            e.target.value !== ""
              ? setTextFilledIn(true)
              : setTextFilledIn(false)
          }
          onFocus={() => setTextFocused(true)}
          onBlur={() => setTextFocused(false)}
          placeholder={textFocused ? "Please enter your preferred Text" : ""}
        />
      </div>
    </>
  );
}
