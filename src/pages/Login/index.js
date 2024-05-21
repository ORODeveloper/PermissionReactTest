import React, {useState,} from "react";
import ForceOro24 from "../../assets/images/ForceOroLogo.png";
import { useNavigate , Navigate} from "react-router-dom";
import { ROLES } from "../../RolesandActions";
const Login = ({ authenticate, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log("HAHA", username, password);
    // Simulate authentication
    if (username === 'admin' && password === 'admin') {
      authenticate(ROLES.ADMINISTRATOR);
    } else if (username === 'property_manager' && password === 'property_manager') {
      authenticate(ROLES.PROPERTY_MANAGER);
    } else if (username === 'tenant' && password === 'tenant') {
      authenticate(ROLES.TENANT);
    } else if (username === 'maintenance_staff' && password === 'maintenance_staff') {
      authenticate(ROLES.MAINTENANCE_STAFF);
    } else {
      setError('Invalid credentials');
      
    }
  };

  if (isAuthenticated) {
    
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="h-full w-full">
      <div className="flex w-full h-full  justify-center items-center">
        <div className=" flex flex-col gap-4 bg-white min-w-[20rem]  rounded-md  bg-opacity-50 px-10 py-4">
          <div className="flex justify-center">
            <img src={ForceOro24} className="object-contain h-20 w-auto" />
          </div>
          <div className="flex justify-center">
            <p className="text-sm font-bold ">Welcome Back </p>
          </div>
          <div className="flex flex-col gap-4 mt-4 text-black">
            
            <input
            value={username}
            onChange={(e)=>setUsername(e.target.value )}

              className="px-4 text-xs py-2 placeholder-black text-gray-700 placeholder-opacity-50 bg-transparent border border-black border-opacity-25 bg-transparent border  border-black border-opacity-25 outline-none focus:outline-none rounded-full w-full "
              placeholder="you@yourmail.com"
            />
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              className="px-4 text-xs py-2 placeholder-black text-gray-700 placeholder-opacity-50 bg-transparent border border-black border-opacity-25  focus:outline-none rounded-full w-full "
              placeholder="password"
            />
          </div>
          <div className="flex justify-end">
            <p className="text-sm font-normal underline">Forget Password</p>
          </div>
          <div className="flex justify-center mt-5">
            <button onClick={()=> handleLogin()} className="px-2 py-2 rounded-full bg-[#25A869] text-sm text-white w-full ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
