import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, heading }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="z-1000 fixed left-0 top-0 h-screen w-full bg-black/20 backdrop-blur-sm">
      <div
        className="fixed left-1/2 top-1/2 w-2/5 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-gradient-to-br from-purple-200 from-30% to-indigo-200 px-12 pb-8 pt-14 shadow-lg"
        ref={ref}
      >
        <div className="absolute left-0 top-0 flex w-full items-center justify-between bg-white p-3 pl-5">
          <p className="font-bold uppercase tracking-wide">{heading}</p>
          <button
            className="ml-auto mr-4 flex translate-x-3 items-center justify-center rounded-full border border-slate-500 bg-transparent p-1 text-slate-400"
            onClick={close}
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-5">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
