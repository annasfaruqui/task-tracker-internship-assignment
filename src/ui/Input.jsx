function Input({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled,
  required,
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
      disabled={disabled}
      required={required}
    />
  );
}

export default Input;
