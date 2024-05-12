import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdate from './AddAndUpdate';
import useClose from '../hooks/useClose';

function Contactcard({contacts}) {

  let [isOpen , onOpen , onClose] = useClose();

  const deleteContact = async (id) => {
    try{
      await deleteDoc(doc(db , 'contacts' , id));

    }
    catch(error){
      console.log(error);
    }
  }

  let [con , setCon] = useState({});

  return (
    <div className='flex flex-col my-5 gap-2'>
        {contacts.map((contact) => (
          <>
          <div key={contact.id} className='rounded-lg p-2 bg-[#FFEAAE] flex justify-between items-center gap-2'>
            <div className="flex gap-2 items-center">
            <CgProfile className="text-[orange] text-4xl"/>
            <div className="text-black font-medium">
              <h2 className="text-[14px]">Name : {contact.Name}</h2>
              <p className="text-[11px] font-medium">Email : {contact.Email}</p>
            </div>
            </div>
            <div className="flex gap-2">
              <RiDeleteBin6Line className='text-2xl cursor-pointer' onClick={() => {deleteContact(contact.id)}} />
              <MdOutlineEdit className='text-2xl cursor-pointer'  onClick={() => {onOpen(); setCon(contact)}}/>
            </div>
          </div>
          </>
        ))}
        <AddAndUpdate contact={con} isOpen={isOpen} onClose={onClose} update={true}/>
      </div>
  )
}

export default Contactcard