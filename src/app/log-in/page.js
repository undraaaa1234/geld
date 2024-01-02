import Link from "next/link";

export default function LogIn() {
  return (
    <>
      <div className="w-full m-auto flex">
        <div className="flex flex-col gap-10 m-auto w-[50%] p-10">
          <div className="flex gap-2 m-auto">
            <img src="Vector.png"></img>
            <p className="font-bold">Geld</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <p className="font-bold ">Welcome Back</p>
            <p className="text-gray-700">
              Welcome back, Please enter your details
            </p>
          </div>

          <div className="flex flex-col gap-4 w-[60%] m-auto md:max-w-[400px]">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 rounded py-2 px-1 bg-slate-50"
            />
            <input
              type="text"
              placeholder="Password"
              className="border border-gray-300 rounded py-2 px-1 bg-slate-50"
            />
            <button className="text-white bg-blue-500 rounded-md p-2">
              Log in
            </button>
          </div>

          <div className="flex gap-5 m-auto">
            <p>Don’t have account?</p>
            <Link href="/sign-up">
              <p className="text-blue-600">Sign up</p>
            </Link>
          </div>
        </div>
        <div className="bg-blue-700 w-[50%] h-screen"></div>
      </div>
    </>
  );
}
