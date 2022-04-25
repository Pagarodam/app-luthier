const Input = ({
  id = '',
  label = '',
  type = 'text',
  value ,
  onChange = '',
  placeholder = '',
  required = true,
  className = 'input input-bordered',
  ...props
}) => {
  return (
    <>
      {type != "radio" && <span>{label}</span>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    </>
  );
};

export default Input;
