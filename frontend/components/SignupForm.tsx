import React from 'react'
import { SigninFormProps } from '@/types/FunctionProps'
import { useForm } from "react-hook-form"
import { authData } from '@/validators/auth.validator'
function SignupForm({ setFormType }: SigninFormProps) {
    const { register, handleSubmit } = useForm({})
    const submitData = async (data: any) => {
        if (data["confirm-password"] !== data["password"]) {
            alert("Password Do not Match")
        } else {
            const result = await authData.safeParse(data);
            if (result.success === true) {
                console.log(result.data);
            } else {
                console.log(result.error.message);
            }
        }
    }
    return <form action="" method='post' className='border h-[60vh] w-[50%] flex flex-col items-center justify-center gap-5'>
        <h4 className='form-title'>Sign Up</h4>
        <input type="text" placeholder='Username' {...register("username")} />
        <input type="password" placeholder='Password' {...register("password")} />
        <input type="password" placeholder='Confirm Password' {...register("confirm-password")} />
        <button onClick={handleSubmit(submitData)}>Sign up</button>
        <div className="sign-in-user change-form" onClick={() => {
            setFormType("signin")
        }}>
            Not a User? <span>Sign up</span>
        </div>
    </form>
}

export default SignupForm