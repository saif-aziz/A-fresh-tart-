import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from "../../firebase-config";


const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const authentication = getAuth();
        let uid = '';
        try {
            const response = await createUserWithEmailAndPassword(authentication, data.email, data.password);
            uid = response.user.uid;
            sessionStorage.setItem('User Id', uid);
            sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email Already In Use');
            } else {
                toast.error('An error occurred, please try again later');
            }
            setLoading(false);
            return; // Stop execution if user creation fails
        }
        
        try {
            const response = await fetch('http://localhost:8080/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name
                })
            });
            
            if (response.ok) {
                toast.success('Account created successfully!🎉', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    onClose: () => {
                        setLoading(false);
                        navigate('/');
                    }
                });
            } else {
                const errorResponse = await response.json();
                console.log(errorResponse); // Log the error response
                toast.error('An error occurred, please try again later');
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred, please try again later');
            setLoading(false);
        }
    };
    
    return (
        <div className="h-screen bg-black flex items-center justify-center">
            <div className="rounded-lg max-w-lg w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-12 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-4xl text-gray-200 mb-8 text-center">Register</h5>
                    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-xl font-medium text-gray-200">Name</label>
                            <input
                                {...register('name')}
                                id="name"
                                type="text"
                                className="block appearance-none w-full px-6 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-xl focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xl font-medium text-gray-200">Email</label>
                            <input
                                {...register('email')}
                                id="email"
                                type="email"
                                className="block appearance-none w-full px-6 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-xl focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-xl font-medium text-gray-200">Password</label>
                            <input
                                {...register('password')}
                                id="password"
                                type="password"
                                className="block appearance-none w-full px-6 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-xl focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                            />
                        </div>
                        <Button size="large">{loading ? "Loading" : 'Register'}</Button>
                    </form>
                    <ToastContainer
                        style={{ marginTop: '50px', fontSize: '18px' }}
                    />
                </div>
            </div>
        </div>
    );
    
    
}

export default Register;
