import React from 'react'
import Modal from './Modal'
import {Field, Form, Formik} from 'formik'
import { addDoc, collection , doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import * as Yup from 'yup';

function AddAndUpdate({isOpen , onClose , update = false , contact}) {

    let contactSchema = Yup.object({
        Name : Yup.string().required("Name is Required") ,
        Email : Yup.string().email().required("Email is required")
    })
    
    const addContact = async (contact) => {
        try{
            const contactref = collection(db , "contacts");
            await addDoc(contactref , contact);
            onClose();
        }
        catch(e){
            console.log(e);
        }
    }

    const updateContact = async (contact , id) => {
        try{
            const contactref = doc(db , "contacts" , id);
            await updateDoc(contactref , contact);
            onClose();
        }
        catch(e){
            console.log(e);
        }
    }

  return (
    <div>
    <Modal isOpen = {isOpen} onClose = {onClose} >
        <Formik
        validationSchema={contactSchema}
        initialValues={
            update ?  {
                Name : contact.Name,
                Email : contact.Email
            } : {
                Name : "" ,
                Email : ""
            }
        }
        onSubmit={(values) => {
            update ? updateContact(values , contact.id) : addContact({Name : values.Name , Email : values.Email});
        }}
        >
            <Form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                <label htmlFor="Name">Name : </label>
                <Field name="Name" className="border h-10 "/>
                </div>
                <div className='flex flex-col gap-1'>
                <label htmlFor="Email">Email : </label>
                <Field type="email" name="Email" className="border h-10 "/>
                </div>
                <button type='submit' className='bg-[orange] px-3 py-1.5 border self-center'>{update ? "Update" : "Add"}</button>
            </Form>
        </Formik>
    </Modal>
    </div>
  )
}

export default AddAndUpdate