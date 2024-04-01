function Textarea({ placeholder, value, onChange, disabled }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input h-24"
      disabled={disabled}
    ></textarea>
  );
}

export default Textarea;
