import { useState } from "react";

export default function Checkbox(props) {
  const {
    label,
    editableLabel,
    labelPosition,
    disabled,
    onValueChange,
    labelSize,
    checkboxSize
  } = props;

  const [value, setValue] = useState(false);

  const handleOnChange = (event) => {
    const newValue = event.target.checked;
    setValue(newValue);

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    fontSize: labelSize,
    font: "",
    lineHeight: 1.5,
    accentColor: disabled ? "#ADFF2F" : "#006A4E",
    opacity: disabled ? 0.38 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    userSelect: "none"
  };

  const inputStyle = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontfamily: "DM Sans",
    flexShrink: 0,
    width: checkboxSize,
    height: checkboxSize,
    borderRadius: "50%",
    border: `solid 2px ${disabled ? "#9e9e9e" : "#5f6368"}`,
    backgroundColor: value ? "#1a73e8" : "#00563B",
    transition: "background-color 150ms, border-color 150ms, box-shadow 150ms",
    cursor: disabled ? "not-allowed" : "pointer"
  };

  return (
    <label style={labelStyle}>
      <input
        type="checkbox"
        style={inputStyle}
        checked={value}
        onChange={handleOnChange}
        disabled={disabled}
      />
      {editableLabel ? (
        <input
          type="text"
          value={label}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
          disabled={disabled}
        />
      ) : (
        <span
          style={{
            marginLeft: labelPosition === "right" ? 8 : 0,
            marginRight: labelPosition === "left" ? 8 : 0
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}
