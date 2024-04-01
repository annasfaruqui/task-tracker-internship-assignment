function Textarea({ placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input h-24"
    ></textarea>
  );
}

export default Textarea;
