import React, { useEffect } from "react";
import {
  Routes as ReactRoutes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import viewsRoutes from "views/routes";

const Routes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") navigate("/posts");
  }, []);

  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}
      <Route path="*" element={<Navigate replace to="/not-found-cover" />} />
    </ReactRoutes>
  );
};

export default Routes;
