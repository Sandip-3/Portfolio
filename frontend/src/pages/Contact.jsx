import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setData((prevState) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  const { name, email, message, lastName } = data;

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email || !message || !lastName) {
        toast.error("Please Fill All Field");
      }

      const res = await axios.post("/api/email", { name, email, message });
      if (res.data.success) {
        toast.success(res.data.message);
        setData((prevState) => ({
          name: "",
          lastName: "",
          email: "",
          message: "",
        }));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        id="about"
        className=" mt-12 mb-12 shadow-md rounded-md gap-6 mx-20 lg:grid lg:py-0  lg:grid-cols-2"
      >
        <div className="overflow-hidden rounded-md mt-6">
          <img
            className="hidden lg:block md:ml-12 md:mb-16 object-cover  rounded-md"
            src="/images/contact.webp"
            alt="contact"
          />
        </div>
        <div className=" sm:block lg:block max-h-[140px]flex flex-col mt-6 text-balance overflow-hidden ">
          <h1 className="md:text-4xl text-3xl text-slate-600 font-serif uppercase border-b border-gray-300 ml-12 mr-12">
            Contact
          </h1>
          <div className="grid grid-cols-2 gap-12 mt-6">
            <div className="col-span-1 flex flex-col ml-12">
              <label className="text-start px-4 py-2 font-serif uppercase">
                First Name
              </label>
              <input
                className="mt-2 text-md font-serif  bg-slate-200 focus:outline-none  border-b-2  focus:border-blue-500 border-slate-900 text-start px-3 py-2"
                type="text"
                onChange={changeHandler}
                placeholder="Sandy"
                value={data.name}
                name="name"
              />
            </div>
            <div className="col-span-1 flex flex-col mr-12">
              <label className="text-start px-4 py-2 font-serif uppercase">
                Last Name
              </label>
              <input
                className="mt-2 text-md font-serif  bg-slate-200 focus:outline-none  border-b-2  focus:border-blue-500 border-slate-900 text-start px-3 py-2"
                type="text"
                value={data.lastName}
                onChange={changeHandler}
                name="lastName"
                placeholder="Candy"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="flex flex-col ml-12">
              <label className="text-center font-serif uppercase px-4 py-2">
                Email Address
              </label>
              <input
                type="email"
                value={data.email}
                onChange={changeHandler}
                name="email"
                className="mt-2 text-md font-serif mr-12 bg-slate-200 focus:outline-none  border-b-2  focus:border-blue-500 border-slate-900 text-start px-3 py-2"
                placeholder="sand@gmail.com"
              />
            </div>
            <div className="flex flex-col ml-12 mt-6">
              <label className="text-center font-serif uppercase px-4 py-2">
                Your Message
              </label>
              <textarea
                type="text"
                value={data.message}
                onChange={changeHandler}
                name="message"
                className="mt-2 text-md font-serif mr-12 bg-slate-200 focus:outline-none  border-b-2  focus:border-blue-500 border-slate-900 text-start px-3 py-2"
              />
            </div>
          </div>
          <button
            onClick={handleClick}
            className="mt-12 mb-6 bg-slate-900 text-white px-8 py-1 rounded-full hover:scale-105 duration-1000 hover:opacity-90"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
