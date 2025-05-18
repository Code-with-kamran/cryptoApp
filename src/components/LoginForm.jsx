import React, { useState } from "react";
import { Mail, Lock, LogIn, UserPlus, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitch from "../pages/LanguageSwitch";
// import { cn } from '@/lib/utils';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    // Removed React.FormEvent
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call (replace with your actual authentication logic)
    try {
      // Replace this with your actual authentication logic (e.g., a fetch request)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay

      // If login is successful
      console.log("Login successful", { email, password });
      // Redirect to a different page or update the UI as needed
    } catch (error) {
      console.error("Login failed", error);
      // Display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" mt-5 items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-1/1 md:p-8 bg-white backdrop-blur-md rounded-full border border-white/10">
        <div className=" lg:mt-8 lg:pt-6 border-t  text-center">
          <button className="inline-flex items-center text-black  hover:text-blue-300 transition-colors">
            <Link
              to="/switchline"
              className="inline-flex items-center  text-blue-400 hover:text-blue-300 transition-colors"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Switching lines
            </Link>
          </button>
          <span className="mx-4 text-gray-600">|</span>
          <button className="text-black hover:text-blue-300 transition-colors">
            <Link
              to="/switchlanguage"
              className="inline-flex items-center  text-blue-400 hover:text-blue-300 transition-colors"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Switch Language
            </Link>
          </button>
        </div>
        <div className="flex items-center justify-center mb-1">
          {/* Logo */}
          <img
            src="https://media.istockphoto.com/id/1299615596/vector/futuristic-golden-bitcoin-digital-currency-computer-circuit-board-cryptocurrency-mining-sci.jpg?s=612x612&w=0&k=20&c=fWGGI_UvdtMa-AtSbhP5CtYzzNwnGydJzr0bx47kxDU=" // Replace with your logo URL
            alt="FASTCOIN Logo"
            className="  h-20 w-auto my-3 md:w-40 md:h-40"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <div>
            <div
              htmlFor="email"
              className="flex gap-10 text-sm font-medium text-black mb-5"
            >
              <div>Mobile</div>
              <div>Mailbox</div>
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter the mailbox"
                className="pl-10 pr-4 py-2.5 bg-transparent text-white border border-gray-300 placeholder:text-gray-400  placeholder:text-sm focus:outline-none    rounded-full w-full"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Please enter a cipher"
                className="pl-10 pr-4 py-2.5 bg-transparent text-white border border-gray-300 placeholder:text-gray-400  placeholder:text-sm focus:outline-none    rounded-full w-full"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <Link to="/signup"  className="hover:text-blue-400 transition-colors">
            Sign Up
          </Link>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Forget cipher?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
