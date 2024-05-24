import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/home/list");
    }, 1000);
  };

  return (
    <div className="bg-[#e2e8f3] h-screen flex justify-center items-center">
      <div className="px-12 py-8 w-[400px] bg-white shadow-lg sm:rounded-3xl sm:p-12">
        <h1 className="mb-[30px] text-center font-bold text-xl  text-[#003399]">
          Device & Connectivity Management (DCM) Portal
        </h1>
        <h3 className="font-semibold text-gray-700 mb-6 text-[15px]">
          Login to your Account
        </h3>
        <form ref={formRef} onSubmit={handleLogin}>
          <div className="relative">
            <input
              autoComplete={"off"}
              id="email"
              name="email"
              type="text"
              value={form.email}
              onChange={handleChange}
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Email address"
              required={true}
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>
          <div className="relative mt-8">
            <input
              autoComplete={"off"}
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Password"
              required={true}
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div className="flex justify-center mt-8 w-250px mb-8">
            <button
              type="submit"
              className="w-full bg-[#003399] shadow-lg hover:drop-shadow-xl transition duration-150 ease-linear rounded-lg text-white py-3"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-gray-500 font-light text-[14px]">
          © Vantiva. All rights reserved @v3.89.3
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
