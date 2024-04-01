function Button({ children, type, onClick }) {
  let btnStyles =
    "w-full px-4 py-2 text-center flex items-center justify-center rounded-md";

  if (type === "primary")
    btnStyles += " bg-blue-600 text-white hover:bg-blue-700";
  if (type === "secondary")
    btnStyles +=
      " bg-slate-100 text-slate-900 ring-slate-300 ring-inset ring-1 hover:bg-slate-200 duration-150";

  return (
    <button className={btnStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
