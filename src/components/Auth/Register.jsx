import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await API.post("/auth/register", { email, password, name, role });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.error || err.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Create an Account
        </h2>

        {error && (
          <p className="mb-6 text-center text-red-600 font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="speaker">Speaker</option>
            <option value="institute">Institute</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-8 text-center text-gray-700">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-purple-600 font-semibold hover:underline focus:outline-none"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
