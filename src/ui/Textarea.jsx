function Textarea({ placeholder, value, onChange, disabled, required }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input h-24"
      disabled={disabled}
      required={required}
    ></textarea>
  );
}

export default Textarea;
