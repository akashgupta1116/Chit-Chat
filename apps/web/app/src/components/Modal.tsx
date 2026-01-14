'use client';
import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>('');

  const toggleModal = () => setIsOpen(!isOpen);

  const handleNameSubmit = () => {};

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-xl font-semibold text-black">Enter your name</h1>
        <p className="mt-1 text-sm text-gray-500">
          Enter your name to start chatting. This will be used to identify
        </p>
        <form onSubmit={handleNameSubmit} className="mt-4">
          <input
            autoFocus
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 outline-green-500"
            placeholder="Your name (e.g. John Doe)"
          />
          <button
            type="submit"
            className="ml-auto mt-3 block cursor-pointer rounded-full bg-green-500 px-4 py-1.5 font-medium text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
