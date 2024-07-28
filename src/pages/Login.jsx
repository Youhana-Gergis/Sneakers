import React, { useState } from 'react';
import './Login/Login.css';
import Lock from '../components/canvas/Lock';
import { database } from '../FirebaseConfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const history = useNavigate();
    
    const signup = (e) => {
        e.preventDefault();
        const Full_Name = e.target.txt.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createUserWithEmailAndPassword(database,email,password,Full_Name).then(data => {
            console.log(data,"authData");
            history('/home');
        }).catch(err => {
            alert(err.code);
        })
    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='main relative'>
            <Lock />
            <input type="checkbox" id='chk' aria-hidden="true" />

            <div className="signup">
                <form onSubmit={ (e) => signup(e)}>
                    <label htmlFor="chk" aria-hidden="true" >Sign up</label>
                    <input type="text" name='txt' placeholder='User name' required/>
                    <input type="email" name='email' placeholder='Email' required />
                    <input type="password" name='password' placeholder='Password' required />
                    <button>
                        <span class="span-mother">
                            <span>S</span>
                            <span>i</span>
                            <span>g</span>
                            <span>n</span>
                            <span>u</span>
                            <span>p</span>
                        </span>
                        <span class="span-mother2">
                            <span>S</span>
                            <span>i</span>
                            <span>g</span>
                            <span>n</span>
                            <span>u</span>
                            <span>p</span>
                        </span>
                    </button>
                </form>
            </div>
            <div className='login'>
                <form>
                    <label htmlFor="chk" aria-hidden="true" >Sign in</label>
                    <input type="email" name='email' placeholder='Email' required />
                    <input type="password" name='password' placeholder='Password' required />
                    <button>
                        <span class="span-mother">
                            <span>S</span>
                            <span>i</span>
                            <span>g</span>
                            <span>n</span>
                            <span>I</span>
                            <span>n</span>
                        </span>
                        <span class="span-mother2">
                            <span>S</span>
                            <span>i</span>
                            <span>g</span>
                            <span>n</span>
                            <span>I</span>
                            <span>n</span>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
