import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ChangePasswordForm = () => {
    const {user, resetPassword, signIn, setLoading } = useAuth();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        try {
            setLoading(true);
            // 1. Sign in user
            await signIn(email, password);
            setLoading(false);
            toast.success('Change password Successful')

        } catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }

    }

    const handleResetPassword = async () => {
        if (!email) return toast.error('Please write your email first!');
        try {
            await resetPassword(email)
            toast.success('Request Success! Check your email for further process....');
            setLoading(false);
            navigate('/login')

        } catch (err) {
            console.log(err);
            toast.error(err.message);
            setLoading(false);
        }
        console.log(email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Email address
                        </label>
                        <input
                            type='email'
                            name='email'
                            onBlur={e => setEmail(e.target.value)}
                            defaultValue={user?.email}
                            id='email'
                            required
                            placeholder='Enter Your Email Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                        </div>
                        <input
                            type='password'
                            name='password'
                            autoComplete='current-password'
                            id='password'
                            required
                            placeholder='*******'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                        />
                    </div>
                </div>
            </form>
            <div className='space-y-1'>
                <button onClick={handleResetPassword} className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                    Forgot password?
                </button>
            </div>
        </div>
    );
};

export default ChangePasswordForm;