import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import { useOutsideClick } from "../hooks/useOutsideClick";
import { FaEllipsisV } from "react-icons/fa";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return (
    <div className="relative flex items-center justify-end">{children}</div>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      className="translate-x-1 rounded-sm border-0 bg-transparent  duration-200 hover:bg-white"
      onClick={handleClick}
    >
      <FaEllipsisV className="mr-1 h-6 w-6 bg-blue-600 p-1 text-white" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  const x = `${Math.ceil(position.x)}px`;
  const y = `${Math.ceil(position.y)}px`;

  return createPortal(
    <ul
      className="fixed divide-y-2 divide-white rounded-md bg-gray-100 shadow-md "
      style={{ top: `${y}`, right: `${x}` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="flex w-full items-center gap-2 border-0 bg-transparent px-5 py-2 text-sm duration-200 hover:bg-gray-300"
        onClick={handleClick}
      >
        <span className="flex h-4 w-4 items-center justify-center text-gray-700 duration-300">
          {icon}
        </span>
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
