import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "123456") {
      navigate("/projects");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-sm shadow-sm shadow-black/10 ring-1 ring-black/10 border border-dotted border-gray-300 p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">
          Construction App Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>

            <input
              type="email"
              className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-1 focus:ring-gray-400 outline-none"
              value={email}
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>

            <input
              type="password"
              className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-1 focus:ring-gray-400 outline-none"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full text-white py-2  border border-dashed border-gray-200 transition"
          >
            Login
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Test: test@test.com / 123456
        </p>
      </div>
    </div>
  );
}
