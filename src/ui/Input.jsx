function Input({ name, type, placeholder, value, onChange, disabled }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
      disabled={disabled}
    />
  );
}

export default Input;
