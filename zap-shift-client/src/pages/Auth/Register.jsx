import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {registerUser}= useAuth();
    const location= useLocation();
    console.log(location);
    const navigate= useNavigate();
    const handleRegistration=(data)=>{
        console.log(data);
        registerUser(data.email, data.password)
            .then(result=>{console.log(result.user)})
            .catch(error=>{console.log(error)});
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" 
                    {...register("email", {required: true, minLength: 6 })} />
                    {errors.email?.type==='required' && <span>Email is required</span>}
                    
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", {required: true, minLength: 6})} />
                    {errors.password?.type==='required' && <span>Password is required</span>}
                    {errors.password?.type==='minLength' && <span>Password must be more than 6 characters</span>}
                    
                    <div><a className="link link-hover">Forgot password?</a></div>
                    
                    <button className="btn btn-neutral mt-4">Register</button>

                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;