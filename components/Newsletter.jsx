import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any action you want with the email (e.g., send it to a backend server)
        console.log('Subscribed with email:', email);
        // Show success message using react-toastify
        toast.success('Subscription successful! 🎉', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setEmail('');
    };

    return (
        <section className="newsletter">
            <form onSubmit={handleSubmit}>
                <h3>Subscribe for latest updates</h3>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="box"
                    value={email}
                    onChange={handleInputChange}
                />
                <input type="submit" value="Subscribe" className="box2" />
            </form>
            <ToastContainer
                         style={{ marginTop: '50px', fontSize: '18px' }}
                    />
        </section>
    );
};

export default Newsletter;
