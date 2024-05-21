import React from "react";
import { useAuth } from "../utils/helpers";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();

  const token = useAuth();
  return token ? <Outlet /> : navigate("/login");
};

export default PrivateRoutes;
