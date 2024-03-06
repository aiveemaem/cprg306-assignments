"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
        {user && <p className="text-xl mb-2">Welcome, {user.displayName}!</p>}
        <div>
          {user ? (
            <div className="flex flex-col items-center">
              <div>
                <a className=" hover:text-slate-900 border border-pink-500 bg-pink-500 rounded-md p-1">
                  <Link href="/week-8/shopping-list">Go to Shopping List</Link>
                </a>
              </div>
              <button
                onClick={firebaseSignOut}
                className="hover:underline mt-10"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <img src="/github.png" className="w-5 mr-2" />
              <button
                onClick={gitHubSignIn}
                className="hover:underline cursor-pointer"
              >
                Sign in with GitHub
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
