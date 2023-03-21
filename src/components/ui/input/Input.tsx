import { useState } from "react";
//* Formik
import { Field } from "formik";
//* Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type PropTypes = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  className?: string;
};

export default function Input({
  type,
  name,
  placeholder,
  label,
  className,
}: PropTypes) {
  //* States
  const [inputType, setInputType] = useState<"text" | "password">("password");

  return (
    <div className="input-container">
      <label>{label}</label>

      <Field
        className={className}
        type={type === "password" ? inputType : type}
        name={name}
        placeholder={placeholder}
      />
      {type === "password" && (
        <>
          {inputType === "password" ? (
            <AiOutlineEye
              className="password-icon"
              onClick={() => setInputType("text")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="password-icon"
              onClick={() => setInputType("password")}
            />
          )}
        </>
      )}
    </div>
  );
}
