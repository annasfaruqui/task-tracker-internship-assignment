function Select({ children, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="input w-fit">
      {children}
    </select>
  );
}

export default Select;
