import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import "../UI/adminPage/Checkbox.scss";

export const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <div className="squaredTwo">
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span className="checkmark"></span>
      </div>
    </>
  );
});
