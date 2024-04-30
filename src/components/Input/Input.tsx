/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, forwardRef } from "react";
import { Label } from "../Label/Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", id = "", label = "", placeholder = "", ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <Label htmlFor={id}>
          {label}
        </Label>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          id={id}
          {...props}
        />
      </div>
    );
  }
);
