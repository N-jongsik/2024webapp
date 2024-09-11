import React from "react";

function Button({ children, testOnly, className, ...props }) {
  let cssClass = testOnly ? "text-button" : "btn";
  cssClass = cssClass + " " + className;
  return (
    <div className={cssClass} {...props}>
      {children}
    </div>
  );
}

export default Button;
