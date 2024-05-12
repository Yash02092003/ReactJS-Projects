import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';

import Contactcard from './components/Contactcard';
import  Modal  from './components/Modal';
import AddAndUpdate from './components/AddAndUpdate';

function App() {

  const [contacts , setContacts] = useState([]);

  const [open , setOpen] = useState(false);

  const [filteredContacts , setFilteredContacts] = useState([]);

  const filter = (e) => {
    try{
      const contactRef = collection(db , "contacts");
      onSnapshot(contactRef , (snapshot) => {
      const contactList = snapshot.docs.map( (doc) => {
          return {
            id : doc.id ,
            ...doc.data()
          }
        })
        setFilteredContacts( contactList.filter( (contact) => {
          return contact.Name.toLowerCase().includes(e.target.value.toLowerCase());
        }) )
        if(e.target.value === ""){
          setContacts(contactList);
        }
        else{
          setContacts(filteredContacts);
        }
      })
    }
    catch(e){
      console.log(e);
    }

  }
  const onOpen = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  useEffect( ()=> {
    const getContacts = async () => {
      try{
        const contactRef = collection(db , "contacts");
        onSnapshot(contactRef , (snapshot) => {
        const contactList = snapshot.docs.map( (doc) => {
            return {
              id : doc.id ,
              ...doc.data()
            }
          })
          setContacts(contactList);
          return contactList;
        })
      }
      catch(e){
        console.log(e);
      }
    }

    getContacts();
  } , []);
  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar/>
      <div className="flex items-center gap-3">
      <div className="flex relative items-center flex-grow">
        <CiSearch className="flex-grow absolute text-3xl ml-1 text-white"/>
        <input type="text" onChange={filter} className="bg-transparent border border-white rounded-md h-10 flex-grow pl-9"/>
      </div>
      <IoAddCircleOutline className="text-4xl text-white cursor-pointer" onClick={onOpen}/>
      </div>
      <Contactcard contacts = {contacts}/>
    </div>
    <AddAndUpdate isOpen={open} onClose={onClose}/>
    </>
  )
}

export default App