"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();

  const handleSignOut = () => {
    firebaseSignOut();
    window.location.href = "/week-8";
  };

  return (
    <main className="p-2 m-2">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-5 ">Profile</h1>
        {user && (
          <div className="flex items-center">
            <a className="hover:underline mr-4">
              <Link href="/week-8/shopping-list">Shopping List</Link>
            </a>
            <button onClick={handleSignOut} className="hover:underline mr-4">
              Sign out
            </button>
          </div>
        )}
      </div>
      {user && (
        <div>
          <img src={user.photoURL} className="w-10 h-10 rounded-full mr-2" />
          <p className="text-lg">Name: {user?.displayName}</p>
          <p className="text-lg">Email: {user?.email}</p>
        </div>
      )}
    </main>
  );
}
