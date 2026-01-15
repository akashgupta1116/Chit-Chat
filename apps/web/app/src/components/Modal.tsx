'use client';
import React, { useState } from 'react';

interface ModalProps {
  modalBody: string;
  submitBtn: string;
  submitHandler: (val:string)=> void
}

const Modal = ({
  modalBody,
  submitBtn,
  submitHandler
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>('');

  // const toggleModal = () => setIsOpen(!isOpen);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitHandler(inputName)
  }
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-xl font-semibold text-black">Enter your name</h1>
        <p className="mt-1 text-sm text-gray-500">
          {modalBody}
        </p>
        <form onSubmit={onSubmit} className="mt-4">
          <input
            autoFocus
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 outline-green-500"
            placeholder="Your name (e.g. John Doe)"
          />
          <button
            type="submit"
            disabled={!inputName.length}
            className={`ml-auto mt-3 block cursor-pointer rounded-full ${!inputName.length ? "bg-gray-300": "bg-green-500"} px-4 py-1.5 font-medium text-white`}
          >
            {submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
