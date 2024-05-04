'use client'

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(ev) {
        ev.preventDefault();
        console.log('Submitting form...');
        fetch("/api/register", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle successful response here
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        
    
        }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
        Register
      </h1>
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input type='email' placeholder="E-mail" 
        value={email} onChange={ev => setEmail(ev.target.value)}/>
        <input type='password' placeholder="Password"
        value={password} onChange={ev => setPassword(ev.target.value)}  />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
            or login with social provide
        </div>
        <button className="flex gap-4 justify-center">
            <Image src={'/google1.png'} alt={''} width={24} height={24}/>
            Login with google
        </button>
      </form>
    </section>
  );
}
