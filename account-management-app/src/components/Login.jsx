import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {

        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const user = existingUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            navigate("/account");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="relative w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-semibold"
                    aria-label="Close"
                >
                    ✕
                </button>

                <h1 className="text-2xl font-semibold text-gray-800 mb-1">Welcome Back</h1>
                <p className="text-sm text-gray-600 mb-6">
                    Enter your credentials to access your account.
                </p>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">

                    <div className="flex flex-col text-left">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col text-left relative">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 py-2 text-white font-medium transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-2">
                    Don’t have an account?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Register
                    </button>
                </p>

            </div>
        </div>
    )
}

export default Login;