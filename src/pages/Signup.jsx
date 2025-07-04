import { useEffect, useState } from 'react';
import loginImage from '../assets/image/login.svg';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/features/user/userSlice';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const { handleSubmit, register, control } = useForm();
    const password = useWatch({ control, name: 'password' });
    const confirmPassword = useWatch({ control, name: 'confirmPassword' });
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    const { isLoading, isError, error } = useSelector((state) => state.userSlice);

    useEffect(() => {
        if (
            password !== undefined &&
            password !== '' &&
            confirmPassword !== undefined &&
            confirmPassword !== '' &&
            password === confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password, confirmPassword]);

    useEffect(() => {
        if (isError && error) {
            toast.error(error);
        }
    }, [isError, error])

    const onSubmit = async ({ name, email, password }) => {
        console.log("Form Submitted", { name, email, password });
        try {
            const actionResult = await dispatch(createUser({ email, password, name }));
            console.log("Action result", actionResult);
            if (createUser.fulfilled.match(actionResult)) {
                console.log("User created successfully:", actionResult.payload);
                navigate('/');
            }
        } catch (error) {
            console.error("User creation failed:", error);
        }
    };



    const handleGoogleLogin = () => {
        // Google Login
    };

    return (
        <div className="flex max-w-7xl mx-auto h-screen items-center">
            <Toaster></Toaster>
            <div className="w-1/2">
                <img src={loginImage} className="h-full w-full" alt="" />
            </div>
            <div className="w-1/2  grid place-items-center">
                <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                    <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
                    <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-md"
                                {...register('name')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-md"
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-md"
                                {...register('password')}
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full rounded-md"
                                {...register('confirmPassword')}
                            />
                        </div>
                        <div className="!mt-8 ">
                            <button
                                type="submit"
                                className="btn btn-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                                disabled={disabled}
                            >
                                Sign up
                            </button>
                        </div>
                        <div>
                            <p>
                                Already have an account?{' '}
                                <span
                                    className="text-primary hover:underline cursor-pointer"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-full"
                            onClick={handleGoogleLogin}
                        >
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;