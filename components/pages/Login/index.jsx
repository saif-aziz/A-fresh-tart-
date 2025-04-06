import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from "../../firebase-config";

const Login = () => {
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                const uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
                window.dispatchEvent(new Event("storage"));
                toast.success('Successful Login!🎉', {
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
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-credential') {
                    toast.error('Invalid email or password');
                } else {
                    toast.error('An error occurred, please try again later');
                }
                setLoading(false);
            });
    };
    

    return (
        <div className="h-screen bg-black flex items-center justify-center">
            <div className="rounded-lg max-w-lg w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-12 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-4xl text-gray-200 mb-8 text-center">Login</h5>
                    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                        <Button size="large">{loading ? "Loading" : 'Login'}</Button>
                    </form>
                    <ToastContainer
                         style={{ marginTop: '50px', fontSize: '18px' }}
                    />
                </div>
            </div>
        </div>
    );
    
};

export default Login;
