
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion"
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import ButtonLoginRegister from '@/components/atomics/button-login-register';
import axios from 'axios'

interface FormInputs {
    email: string;
    password: string;
    name: string;
    confirPassword: string;
}
const Register = ({ onPressClose, onChangeTab }: any) => {

    const [isShow, setIsShow] = useState(false);
    const [isShowConfirm, setIsShowConfirm] = useState(false);
    const [successLogin, setSuccessLogin] = useState(false);
    const [isError, setIsError] = useState({
        errorStatus: false,
        errorMessage: "",
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        watch
    } = useForm<FormInputs>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            name: "",
            confirPassword: "",
        },
    });
    const password = watch("password");

    const formSubmitHandler = async (data: FormInputs) => {
        const { email, password, name, confirPassword } = data

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/register`,
                { name, email, password, confirPassword },
                {
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            if (res?.status === 200) {
                setIsError({ ...isError, errorStatus: false });
                setSuccessLogin(!successLogin);
                onChangeTab?.({ key: 2, title: "Login" })
            } else {
                setIsError({
                    ...isError,
                    errorStatus: true,
                    errorMessage: 'Something went wrong!',
                });
            }

        } catch (error: any) {
            console.error(error?.response?.data?.status);
            setIsError({
                ...isError,
                errorStatus: true,
                errorMessage: error?.response?.data?.status,
            });
        }

    }

    useEffect(() => {
        successLogin &&
            setTimeout(() => {
                setSuccessLogin(!successLogin);
            }, 5000);
    }, [successLogin]);

    return (
        <div className="p-4">
            <AnimatePresence>
                {isError.errorStatus && (
                    <motion.div
                        key={`error`}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        layout
                        className="relative mt-4 text-base bg-red-100 border border-red-300 rounded-md text-mako-500"
                    >
                        <p className="py-4 px-1.5 text-xs">
                            <span className="">{isError.errorMessage}</span>
                        </p>
                        <div
                            onClick={() =>
                                setIsError({ ...isError, errorStatus: false })
                            }
                            className="absolute top-0 right-0 p-1 rounded-full"
                        >
                            <div className="flex items-center justify-center w-3 h-3 bg-red-400 rounded-full fill-current">
                                <IoClose className="w-2 h-2 text-white fill-current" />
                            </div>
                        </div>
                    </motion.div>
                )}
                {successLogin && (
                    <motion.div
                        key={`success`}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        layout
                        className="relative mt-4 text-base border rounded-md text-mako-500 bg-slate-100 border-slate-300"
                    >
                        <p className="py-4 px-1.5 text-xs">
                            <span className="">Berhasil login</span>
                        </p>
                        <div
                            onClick={() => setSuccessLogin(!successLogin)}
                            className="absolute top-0 right-0 p-1 rounded-full"
                        >
                            <div className="flex items-center justify-center w-3 h-3 rounded-full fill-current bg-slate-400">
                                <IoClose className="w-2 h-2 text-white fill-current" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <form method="post" className="mt-6 space-y-3" onSubmit={handleSubmit(formSubmitHandler)} autoComplete="off">
                <div>
                    <label htmlFor="name" className="sr-only">
                        <span>Name</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "Name wajib diisi.",
                        })}
                        className={`block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border ${errors?.name
                            ? `border-red-500 focus:ring-offset-red-300`
                            : `border-transparent focus:ring-offset-gray-300`
                            } rounded-lg text-mako-500 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2`}
                        placeholder="Masukan nama anda"
                    />
                    {errors?.name && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-500"
                            layoutId="email-error"
                        >
                            {errors.name.message}
                        </motion.span>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">
                        <span>Email</span>
                    </label>
                    <input
                        type="text"
                        id="email"
                        {...register("email", {
                            required: "Email wajib diisi.",
                            pattern: {
                                value:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email tidak valid.",
                            },
                        })}
                        className={`block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border ${errors?.email
                            ? `border-red-500 focus:ring-offset-red-300`
                            : `border-transparent focus:ring-offset-gray-300`
                            } rounded-lg text-mako-500 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2`}
                        placeholder="Masukan email anda"
                    />
                    {errors?.email && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-500"
                            layoutId="email-error"
                        >
                            {errors.email.message}
                        </motion.span>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        <span>Password</span>
                    </label>
                    <div className="relative flex flex-col">
                        <input
                            type={isShow ? "text" : "password"}
                            id="password"
                            {...register("password", {
                                required: "Password wajib diisi.",
                                minLength: {
                                    message: "Password minimal 8 karakter.",
                                    value: 8,
                                },
                            })}
                            placeholder="Masukan password anda"
                            className={`block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border ${errors?.password
                                ? `border-red-500 focus:ring-offset-red-300`
                                : `border-transparent focus:ring-offset-gray-300`
                                } rounded-lg text-mako-500 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2`}
                        />
                        <div className="absolute right-0 flex items-center h-full px-3">
                            {isShow ? (
                                <FiEyeOff
                                    className="text-lg cursor-pointer text-slate-600"
                                    onClick={() => setIsShow(!isShow)}
                                />
                            ) : (
                                <FiEye
                                    className="text-lg cursor-pointer text-slate-600"
                                    onClick={() => setIsShow(!isShow)}
                                />
                            )}
                        </div>
                    </div>

                    {errors?.password && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            layoutId="password-error"
                            className="text-xs text-red-500"
                        >
                            {errors.password.message}
                        </motion.span>
                    )}
                </div>
                <div>
                    <label htmlFor="confirPassword" className="sr-only">
                        <span>Konfirmasi Password</span>
                    </label>
                    <div className="relative flex flex-col">
                        <input
                            type={isShowConfirm ? "text" : "password"}
                            id="confirPassword"
                            {...register("confirPassword", {
                                required: "Konfirmasi Password wajib diisi.",
                                validate: (value) => value === password || "Password tidak sama",
                            })}
                            placeholder="Masukan konfirmasi password"
                            className={`block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border ${errors?.password
                                ? `border-red-500 focus:ring-offset-red-300`
                                : `border-transparent focus:ring-offset-gray-300`
                                } rounded-lg text-mako-500 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2`}
                        />
                        <div className="absolute right-0 flex items-center h-full px-3">
                            {isShowConfirm ? (
                                <FiEyeOff
                                    className="text-lg cursor-pointer text-slate-600"
                                    onClick={() => setIsShowConfirm(!isShowConfirm)}
                                />
                            ) : (
                                <FiEye
                                    className="text-lg cursor-pointer text-slate-600"
                                    onClick={() => setIsShowConfirm(!isShowConfirm)}
                                />
                            )}
                        </div>
                    </div>

                    {errors?.confirPassword && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            layoutId="password-error"
                            className="text-xs text-red-500"
                        >
                            {errors.confirPassword.message}
                        </motion.span>
                    )}
                </div>
                <div className='py-4'>
                    <ButtonLoginRegister onPressClose={onPressClose} isSubmitting={isSubmitting} isSubmitSuccessful={isSubmitSuccessful} />
                </div>
            </form>
        </div >
    )
}

export default Register