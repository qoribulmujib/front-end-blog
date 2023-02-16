import { useState } from 'react'
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion"
import { FiEyeOff, FiEye } from 'react-icons/fi'
import ButtonLoginRegister from '@/components/atomics/button-login-register';

interface FormInputs {
    email: string;
    password: string;
    name: string;
    confirmPassword: string;
}

const Login = ({ onPressClose }: any) => {
    const [isShow, setIsShow] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormInputs>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            name: "",
            confirmPassword: "",
        },
    });
    return (
        <div className="p-4">
            <form method="post" className="my-6 space-y-3">
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
                                    message: "Password minimal 12 karakter.",
                                    value: 12,
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
            </form>
            <ButtonLoginRegister onPressClose={onPressClose} />
        </div>
    )
}

export default Login