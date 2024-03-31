import React from "react";

const AdminLogin = () => {
  return (
    <div className="w-full min-h-screen bg-black flex">
      <div className="w-[45%] h-[100vh] bg-white">
        <div className=" w-[60%]  ml-auto mt-[100px]	">
          <div className="mb-[50px]">
            <h1 className=" font-bold text-[32px]">Learner</h1>
          </div>

          <div className="gap-2 mb-5">
            <h4 className=" ">Register</h4>
            <h4 className=" text-[#536383] text-[12px]">
              Create New Learnerr Account
            </h4>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-[13px] font-semibold ">Name</p>
            <input className="h-[44px] w-[400px] border rounded-md" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-[13px] font-semibold ">Email or Username</p>
            <input className="h-[44px] w-[400px] border rounded-md" />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-[13px] font-semibold ">Password</p>
            <input className="h-[44px] w-[400px] border rounded-md" />
          </div>

          <div className="flex gap-1 mt-5">
            <input
              className="w-[16px] h-[16px] border rounded-md"
              type="checkbox"
            />

            <p className="text-[12px]">
              I agree to Dashlite Privacy Policy & Terms.
            </p>
          </div>

          <button className="w-[400px] h-[44px] bg-[#743fef] text-white  rounded-lg mt-4">
            Sign in
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AdminLogin;
