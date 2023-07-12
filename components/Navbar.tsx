import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className=' w-full z-10 absolute'>
        <nav className=' max-w-[1440px] mx-auto sm:px-16 px-6 py-4 flex justify-between items-center'>
           <Link href={"/"} className=' flex justify-center items-center'>
             <Image src="/logo.svg" alt='Logo' width={118} height={18} className=' object-contain bg-transparent'/>
           </Link>
           <CustomButton title='Sign in' btnType = "button" containerStyles = " text-primary-blue rounded-full bg-white min-w-[120px]"/>
        </nav>
    </header>
  )
}

export default Navbar