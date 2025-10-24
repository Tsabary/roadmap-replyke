import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AuthSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setClient, setAccessToken } = useAuth();

  useEffect(() => {
    console.log("AuthSuccessPage useEffect triggered");
    const accessToken = searchParams.get("accessToken");
    const id = searchParams.get("id");
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const avatar = searchParams.get("avatar");

    if (!id) return;

    setAccessToken?.(accessToken);
    setClient?.({
      id,
      email: email || undefined,
      name: name || undefined,
      avatar: avatar || undefined,
    });

    navigate("/");
  }, [searchParams, setAccessToken, setClient, navigate]);

  return null;
}

export default AuthSuccessPage;
