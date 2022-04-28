const Button = ({onClick, label, disabled=false})=>{
    return (<button onClick={onClick} disabled={disabled}>{label}</button>)
};

export default Button;