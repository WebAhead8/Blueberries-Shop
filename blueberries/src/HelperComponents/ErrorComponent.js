import React from "react";
function ErrorComponent(props) {
return (
    <div className="errorField">
    <label className="errorLabel">{props.children}</label>
</div>
)
}

export default ErrorComponent;