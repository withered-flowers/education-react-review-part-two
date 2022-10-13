import React, { useEffect } from "react";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";

const ProtectedComponent = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      navigate("/login");
    }
  }, [user, loading]);

  return loading ? <div>Loading...</div> : children;
};

export default ProtectedComponent;
