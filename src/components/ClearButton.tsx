import React from "react";
import "./ClearButton.css";

interface Props {
    handleClear: () => void;
}

const ClearButton: React.FC<Props> = props => {
    return (
        <div className="clear-btn" onClick={props.handleClear}>
            {props.children}
        </div>
    );
};

export default ClearButton;
