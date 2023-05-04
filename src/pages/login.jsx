/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/userStore";
const Login = () => {
  const addUser = useUserStore((state) => state.addUser);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        user
      );
      if (res) {
        navigate("/game");
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.email));
        addUser(res.data.email, res.data._id, res.data.Cards);
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-950 p-4 rounded-lg space-y-2"
      >
        <h2 className="font-bold text-2xl">Login</h2>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Email address
          </label>
          <input
            type="text"
            placeholder="Write your email address"
            className="input w-full max-w-xs"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="passworld" className="block mb-2 text-sm">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            className="input w-full max-w-xs"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="btn">Sign In</button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
