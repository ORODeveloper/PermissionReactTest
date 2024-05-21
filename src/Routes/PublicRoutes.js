import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/helpers";

const PublicRoutes = () => {
  const navigate = useNavigate();

  const token = useAuth();
  return token ? navigate("/") : <Outlet /> ;
};

export default PublicRoutes;
