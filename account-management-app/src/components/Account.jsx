import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (storedUser) {
            setUser(storedUser);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        alert("You’ve been logged out!");
        navigate("/");
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        navigate("/update");
    }

    if (!user) {
        return (
            <div className="flex h-screen items-center justify-center text-gray-600">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="w-96 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-3">Account Details</h1>
                <p className="text-gray-500 text-sm mb-8">
                    Manage your personal information below.
                </p>

                {user && (
                    <div className="text-left space-y-4 mb-8">
                        <div>
                            <label className="text-sm text-gray-500">Username</label>
                            <p className="font-medium text-gray-800 bg-gray-100 rounded-md px-3 py-2 mt-1">
                                {user.username}
                            </p>
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Email</label>
                            <p className="font-medium text-gray-800 bg-gray-100 rounded-md px-3 py-2 mt-1">
                                {user.email}
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleUpdate}
                        className="w-full rounded-md bg-blue-600 py-2 text-white font-medium transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Update Info
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full rounded-md border border-gray-300 py-2 text-gray-700 font-medium transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
