import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-base-100"
      data-theme="forest"
    >
      <div className="relative group w-full max-w-5xl mx-auto">
        {/* Glowing aura effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>

        {/* Main container */}
        <div className="relative z-10 border border-primary/25 flex flex-col lg:flex-row bg-base-100 rounded-xl shadow-lg overflow-hidden">
          {/* FORM SECTION */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
            {/* LOGO */}
            <div className="mb-6 flex items-center gap-2">
              <MessageCircle className="size-9 text-primary" />
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider animate-pulse">
                Abitalk
              </span>
            </div>

            {/* ERROR */}
            {error && (
              <div className="alert alert-error mb-4">
                <span>{error.response.data.message}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold">Welcome Back</h2>
                <p className="text-sm opacity-70">
                  Sign in to your account to continue your language journey
                </p>
              </div>

              {/* Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="abhi@example.com"
                  className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full transition duration-300 focus:ring-2 focus:ring-primary"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition duration-300"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Create an Account
                </Link>
              </p>
            </form>
          </div>

          {/* IMAGE SECTION */}
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

export default LoginPage;
