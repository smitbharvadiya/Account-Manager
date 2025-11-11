import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = { username, email, password };

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (existingUsers.some(u => u.email === email)) {
            alert("User already exists!");
            return;
        }

        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        localStorage.setItem("loggedInUser", JSON.stringify(newUser));

        alert("Registration successful!");

        navigate("/account");

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

                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Create an Account</h1>

                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <div className="flex flex-col text-left">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

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
                        Register
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-2">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Login
                    </a>
                </p>

            </div>
        </div>
    )
}

export default Register;