import React from "react";
// import { LockClosedIcon, AtSymbolIcon } from "lucide-react";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-#021431">
      <div className="bg-white w-96 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-#021431 mb-8">Welcome Back!</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-sm">
              Email Address
            </label>
            <div className="mt-1">
              <div className="inline-flex items-center rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-gray-50 text-#021431">
                  {/* <AtSymbolIcon className="h-5 w-5 text-#021431" /> */}
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="focus:ring-#2dd4bf focus:border-#2dd4bf flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-sm">
              Password
            </label>
            <div className="mt-1">
              <div className="inline-flex items-center rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-gray-50 text-#021431">
                  {/* <LockClosedIcon className="h-5 w-5 text-#021431" /> */}
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="focus:ring-#2dd4bf focus:border-#2dd4bf flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="*********"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-#2dd4bf text-white rounded-md px-4 py-2 w-full font-medium">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}