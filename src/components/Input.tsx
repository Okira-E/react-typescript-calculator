import React from "react";
import "./Input.css";

const Input: React.FC = props => {
    return <div className="input-wrapper">{props.children}</div>;
};

export default Input;
