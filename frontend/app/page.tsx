'use client'
import SigninForm from '@/components/SigninForm';
import SignupForm from '@/components/SignupForm';
import { useState } from 'react';
function page() {
  const [formType, setFormType] = useState<string>("signin")
  return <main className='h-screen w-screen bg-red-200 flex justify-around items-center'>
    <div className="hero-text left w-[40%] bg-blue-300 h-[40vh] flex flex-col justify-center">
      <center><span className='text-6xl font-extrabold'>MyShop</span></center><br />
      <p className='text-center font-bold text-xl text-gray-800'>India's first Digital Shop Where You can Sell Your Any Items Or Service In You Local Or at any Places</p>
    </div>
    <div className="right w-[50%] h-full bg-amber-200 flex flex-col justify-center items-center">
      {
        formType === 'signin' ? <SigninForm setFormType={setFormType} /> : <SignupForm setFormType={setFormType} />
      }
    </div>
  </main>
}

export default page;