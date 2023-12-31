import React from "react";
import "./styles.css";

export default function Context(props) {
    return (
        <div className="context">
            &quot; {props.context} &quot;
        </div>
    );
}
