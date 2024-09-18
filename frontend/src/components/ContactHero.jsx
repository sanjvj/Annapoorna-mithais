import React from 'react'
import ContactForm from './ContactForm'

const ContactHero = () => {
  return (
    <div className='w-full my-20'>
      <div className='flex flex-col md:flex-row gap-10 max-w-screen-xl mx-auto'>
        <img src='contact.svg' className='h-full w-auto'></img>
        <ContactForm></ContactForm>
        <form></form>
      </div>
    </div>
  )
}

export default ContactHero
