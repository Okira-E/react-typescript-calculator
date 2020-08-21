import React from "react";
import "./Button.css";

type Props = {
    handleClick: (char: any) => void;
};

const isOperator = (val: any): boolean => {
    if (val === "." || val === "=") {
        return false;
    }
    return isNaN(val);
};

const Button: React.FC<Props> = props => {
    return (
        <div
            className={`button ${isOperator(props.children) ? "operator" : ""}`}
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    );
};

export default Button;
