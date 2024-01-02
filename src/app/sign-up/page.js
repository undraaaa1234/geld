import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="w-full m-auto flex">
        <div className="flex flex-col gap-10 m-auto w-[50%] p-10">
          <div className="flex gap-2 m-auto">
            <img src="Vector.png"></img>
            <p className="font-bold">Geld</p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <p className="font-bold ">Create Geld account</p>
            <p className="text-gray-700">
              Sign up below to create your Wallet account
            </p>
          </div>

          <div className="flex flex-col gap-4 w-[60%] m-auto md:max-w-[400px]">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded py-2 px-1 bg-slate-50"
            />
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
            <input
              type="text"
              placeholder="Re-password"
              className="border border-gray-300 rounded py-2 px-1 bg-slate-50"
            />
            <button className="text-white bg-blue-500 rounded-md p-2">
              Sign up
            </button>
          </div>

          <div className="flex gap-5 m-auto">
            <p>Already have account?</p>
            <Link href="/log-in">
              <p className="text-blue-600">Log in</p>
            </Link>
          </div>
        </div>
        <div className="bg-blue-700 w-[50%] h-screen"></div>
      </div>
    </>
  );
}
