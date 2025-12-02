import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GoogleCallbackHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");

    if (token) {
      const userData = { token };
      localStorage.setItem("Avero:userData1.0", JSON.stringify(userData));
      navigate("/dashboard");
    } else {
      console.log('Aquiii')
      navigate("/login")
    }
  }, []);

  return <div>Entrando...</div>;
};

