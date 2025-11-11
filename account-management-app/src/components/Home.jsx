import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        navigate("/register");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        navigate("/login");
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome</h1>
                <p className="text-sm text-gray-600 mb-6">
                    Please login or register to access your account.
                </p>

                <div className="flex flex-col gap-3">
                    <button onClick={handleLogin} className="w-full rounded-md bg-blue-600 py-2 text-white font-medium transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Login
                    </button>
                    <button onClick={handleRegister} className="w-full rounded-md border border-gray-300 py-2 text-gray-700 font-medium transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Home;