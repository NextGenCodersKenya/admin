import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
<<<<<<< HEAD
import { FaUserShield, FaLock, FaSignInAlt } from "react-icons/fa";
=======
import { FaUserShield, FaSignInAlt } from "react-icons/fa";
>>>>>>> 6e8f7a9 (Initial commit in new location)

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("https://alvins.pythonanywhere.com/api/admin/login", {
                email,
                password
            });

            setLoading(false);
            setSuccess(response.data.message || "Login successful!");
            localStorage.setItem("admin", JSON.stringify(response.data.admin));
            navigate("/dashboard");
        } catch (error) {
            setLoading(false);
            setError(error.response?.data?.error || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <div className="admin-login-header">
                    <FaUserShield className="admin-icon" />
                    <h2>Admin Portal</h2>
                </div>

                {loading && <div className="admin-loading">Authenticating...</div>}
                {success && <div className="admin-success">{success}</div>}
                {error && <div className="admin-error">{error}</div>}

                <form onSubmit={submitForm} className="admin-login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-with-icon">
<<<<<<< HEAD
                            <FaUserShield className="input-icon" />
=======
                            
>>>>>>> 6e8f7a9 (Initial commit in new location)
                            <input
                                type="email"
                                placeholder="Enter admin email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
<<<<<<< HEAD
                            <FaLock className="input-icon" />
=======
>>>>>>> 6e8f7a9 (Initial commit in new location)
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="login-button">
                        <FaSignInAlt className="button-icon" />
                        {loading ? "Processing..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;