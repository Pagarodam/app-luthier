import React from 'react';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  return (
    <>
      {props.type != 'radio' && <span>{props.label}</span>}
      {/* {ref && <input ref={ref} {...props.input}></input>} */}

      <input
        ref={ref}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        className={props.className}
        defaultValue={props.defaultValue}
        {...props.input}
      />
    </>
  );
});

export default Input;
