import { doc } from 'prettier';
import React from 'react'
import { createPortal } from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai'

function Modal({onClose , isOpen , children }) {
    console.log(children)
  return createPortal(
    <>
    {isOpen && <>
        <div className='p-4 min-h-[200px] max-w-[80%] bg-white relative z-20 m-auto'>
        <div className='flex justify-end' onClick={onClose}><AiOutlineClose className='text-2xl'/></div>
        {children}
        </div>
        <div className='h-screen w-full backdrop-blur-lg absolute z-10 top-0' onClick={onClose}/>
    </>}
    </>
  , document.getElementById('modal-root'))
}

export default Modal;