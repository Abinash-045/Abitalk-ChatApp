import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router"; 
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-base-100"
      data-theme="forest"
    >
      <div className="relative group w-full max-w-5xl mx-auto">
        {/* Glowing aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>

        <div className="relative z-10 border border-primary/25 flex flex-col lg:flex-row bg-base-100 rounded-xl shadow-lg overflow-hidden">
          {/* LEFT SIDE - FORM */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-2">
              <MessageCircle className="size-9 text-primary" />
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider animate-pulse">
                Abitalk
              </span>
            </div>

            {/* Error Message */}
            {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold">Create an Account</h2>
                <p className="text-sm opacity-70">
                  Join Abitalk and start your language learning adventure!
                </p>
              </div>

              {/* Full Name */}
              <div className="form-control">
                <label htmlFor="fullName" className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Abinash Behera"
                  className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={signupData.fullName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="abhi@gmail.com"
                  className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="********"
                  className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  required
                />
                <p className="text-xs opacity-70 mt-1">
                  Password must be at least 6 characters long
                </p>
              </div>

              {/* Checkbox */}
              <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" required />
                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">terms of service</span> and{" "}
                        <span className="text-primary hover:underline">privacy policy</span>
                      </span>
                    </label>
                  </div>

              {/* Submit Button */}
              <button
                className="btn btn-primary w-full hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition duration-300"
                type="submit"
               
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Loading...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT SIDE - Illustration */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
            <div className="max-w-md p-8">
              <div className="relative aspect-square max-w-sm mx-auto">
                <img
                  src="/abhi.png"
                  alt="Language connection"
                  className="w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="text-center space-y-3 mt-6">
                <h2 className="text-xl font-semibold">
                  Connect with language partners worldwide
                </h2>
                <p className="opacity-70">
                  Practice conversations, make friends, and improve your
                  language skills together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
