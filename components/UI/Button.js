const Button = ({ onClick, label, className, disabled = false, href }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <a href={href}></a>
      {label}
    </button>
  );
};

export default Button;
