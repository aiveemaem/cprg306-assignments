"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, googleSignIn } = useUserAuth();

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("User is signed in:", user.displayName);
      window.location.href = "/week-8/shopping-list";
    } else {
      console.log("User is not signed in.");
    }
  }, [user]);

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
        {!user && (
          <div>
            <div className="flex items-center">
              <img src="/github.png" className="w-5 mr-2" />
              <button
                onClick={handleGitHubSignIn}
                className="hover:underline cursor-pointer"
              >
                Sign in with GitHub
              </button>
            </div>
            <div className="flex items-center mt-4">
              <img src="/google.png" className="w-5 mr-2" />
              <button
                onClick={handleGoogleSignIn}
                className="hover:underline cursor-pointer"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
