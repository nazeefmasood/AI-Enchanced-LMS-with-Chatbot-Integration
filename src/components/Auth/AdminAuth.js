import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { updateAuthSlice } from "../../features/auth/authSlice";
import { adminApi_verifyAdminID } from "../../api/paths/admin_api";

function AdminAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(null);

  useEffect(async () => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      try {
        const { email, id, token } = JSON.parse(storedAuth);
        const payload = { email, id, token };
        const response = await adminApi_verifyAdminID(id);
        if (response.data.is_admin) {
          dispatch(updateAuthSlice(payload));
        } else {
          navigate("/admin/login");
        }
      } catch (error) {
        console.error(
          "Error parsing authentication data from local storage:",
          error
        );
      }
    } else {
      navigate("/admin/login");
    }
  }, []);

  return <Outlet />;
}

export default AdminAuth;
