import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    const ok = login(email, password)

    if (ok) navigate("/")
    else alert("Invalid login")
  }

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-indigo-400 via-indigo-200">

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-[350px] max-w-[90%]">

        <h2 className="font-bold text-2xl mb-6 text-center text-purple-800">
          Welcome Back
        </h2>

        <input
          className="border border-gray-300 w-full p-3 mb-4 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 
          transition duration-200"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border border-gray-300 w-full p-3 mb-6 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          transition duration-200"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg text-white font-semibold
          bg-gradient-to-r from-indigo-500 to-purple-600
          shadow-lg
          hover:shadow-2xl
          hover:scale-105
          active:scale-95
          transition-all duration-200"
        >
          Login
        </button>

        {/* <p className="text-center text-sm text-gray-500 mt-4">
          Demo Login: juikatkar@gmail.com / setup
        </p>
 */}
      </div>

    </div>
  )
}

export default Login