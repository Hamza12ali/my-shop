'use client'
import React from 'react'
import { SignupFormProps } from '@/types/FunctionProps'
import { useForm } from "react-hook-form"
import { authData } from '@/validators/auth.validator';
import { useRouter } from 'next/navigation';


function SigninForm({ setFormType }: SignupFormProps) {
    const router = useRouter();
    const { register, handleSubmit } = useForm({});
    const submitForm = async (data: any) => {
        const result = await authData.safeParse(data);
        if (!result.success) {
            alert("Check you Data\n");
        } else {
            if (result.data.username === 'hamza' && result.data.password === '12345678') {
                router.push("../home")
            } else {
                alert("Who r u bitch\n");
            }
        }
    }
    return <form action="" method='post' className='border h-[45vh] w-[50%] flex flex-col items-center justify-center gap-5 '>
        <h4 className='form-title'>Sign in</h4>
        <input type="text" placeholder='Username' {...register("username")} />
        <input type="password" placeholder='Password' {...register("password")} />
        <button onClick={handleSubmit(submitForm)}>Sign in</button>
        <div className="sign-un-form change-form" onClick={() => {
            setFormType("signup")
        }}>Already a User</div>
    </form>
}

export default SigninForm