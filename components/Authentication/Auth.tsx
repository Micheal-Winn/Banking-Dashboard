import React, { useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { IconCheck,IconEye,IconEyeOff } from "@tabler/icons-react";
import UserInput from "./UserInput";

const Auth = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isLogin,setIsLogin] = useState(false)
  const [isAccept,setIsAccept] = useState(false)
  const [isShow,setIsShow] = useState(false)

  

  const passwordShowOrHideHandler  = ()=> {
    setIsShow(!isShow)
  
  }
 

  const checkHandler= ()=> {
    setIsAccept(!isAccept)
  
  }

  return (
    <main>
      <section className="b h-screen pt-3">
        <h1 className="pl-6 text-xl font-bold">Smart Save</h1>
        <h2 className="text-center mt-28 text-xl font-semibold mb-5">Sign in to Smart Save</h2>
        <h3 className="text-center mb-8 text-xs font-medium text-gray-400">Send,spend and save smarter</h3>

        {/**form */}
        <form
          onSubmit={handleSubmit(() => {})}
          className="grid grid-cols-1 w-[70%] mx-auto gap-2 "
        >
          {isLogin && (
            <UserInput
            label="Username"
            register={register("name", {
              required: { value: true, message: "username must not be empty" },
              minLength: {
                value: 2,
                message: "must be at least two characters long",
              },
              pattern: {
                value: /^[A-Za-z0-9_]+$/g,
                message: "username can be a-z,A-Z,0-9,_",
              },
            })}
            error={errors.name as FieldError}
            placeholder="Username"
            autoFocus
          />
          )}
          <UserInput
            label="Email"
            register={register("email", {
              required: { value: true, message: "email must not be empty" },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "please provide a valid email.",
              },
            })}
            error={errors.email as FieldError}
            placeholder="Email"
            autoFocus
          />
          <UserInput
            label="Password"
            register={register("password", {
              required: { value: true, message: "password must not be empty" },
              minLength: {
                value: 4,
                message: "must be at least 4 characters long",
              },
              maxLength: { value: 14, message: "must be under 15 characters" },
            })}
            error={errors.password as FieldError}
            placeholder="Password"
            type={isShow ? "text" : "password"}
            icon={isShow ? <IconEyeOff size={16} color='gray'/> : <IconEye size={16} color='gray'/>}
            pshandler={passwordShowOrHideHandler}
          />

         
          <div className="flex items-center mt-4">
            <Checkbox.Root
            onClick={checkHandler}
              className="shadow-blackA7 hover:bg-violet3 flex h-[18px] w-[18px] appearance-none items-center justify-center rounded-[4px] bg-white  outline-none border-[1px] my-3"
              id="c1"
            >
              <Checkbox.Indicator className="text-violet11" defaultChecked={isAccept} onClick={checkHandler}>
                <IconCheck size={10} />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              className="pl-[15px] text-[13px] leading-none text-black"
              htmlFor="c1"
            >
              Accept <span className="text-blue-700">terms</span> and{" "}
              <span className="text-blue-700">conditions.</span>
            </label>
          </div>
          <button disabled={!isAccept} type="submit"  className="bg-blue-700 text-white px-4 py-2 rounded-3xl text-sm font-semibold mb-3 disabled:opacity-50 ">
            Sign Up
          </button>

          {/**to show only in sing in */}
          <p className="text-xs underline hover:text-blue-700 cursor-pointer text-center text-blue-500 mb-6">
            {isLogin && "Forgot Password?"}
          </p>
          <div className="flex w-[100%] mx-auto gap-1 justify-center">
            <p className="text-xs text-slate-400  hover:text-blue-500 cursor-pointer">
              Don&apos;t have an account?
            </p>
            <button
              onClick={()=>setIsLogin(!isLogin)}
              type="button"
              className="text-xs  hover:text-blue-500 cursor-pointer text-blue-700"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Auth;
