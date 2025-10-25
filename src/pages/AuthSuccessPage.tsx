import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AuthSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setClient, setAccessToken } = useAuth();

  const accessToken = searchParams.get("accessToken");
  const id = searchParams.get("id");
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const avatar = searchParams.get("avatar");

  useEffect(() => {
    if (!id) return;

    setAccessToken?.(accessToken);
    setClient?.({
      id,
      email: email || undefined,
      name: name || undefined,
      avatar: avatar || undefined,
    });

    navigate("/");
  }, [navigate, id, email, name, avatar, accessToken]);

  return null;
}

export default AuthSuccessPage;
