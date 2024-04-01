function Select({ children, value, onChange, required }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="input w-fit"
      required={required}
    >
      {children}
    </select>
  );
}

export default Select;
