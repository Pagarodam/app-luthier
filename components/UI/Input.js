import React from 'react';

const Input = ({
  id,
  type,
  value,
  onChange,
  required,
  placeholder,
  label,
  className,
  defaultValue,
  ...props
}) => {
  return (
    <>
      {type != 'radio' && <span className={className}>{label}</span>}

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={className}
        defaultValue={defaultValue}
        {...props}
      />
    </>
  );
};

export default Input;
