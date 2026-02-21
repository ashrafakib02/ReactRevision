import React, { useState, useContext } from "react";
import  UserContext  from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });        
    }
    
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="bg-gray-200 p-4 rounded">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input 
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 border rounded" 
            />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
