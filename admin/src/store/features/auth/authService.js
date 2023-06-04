import api from "../../../utils/api";

const signIn = async (data) => {
  const response = await api.post("/auth/admin-signin", data);

  return response.data;
};

const logOut = async () => {
  const response = await api.get("/auth/admin-logout");

  return response.data;
};

const authService = { signIn, logOut };

export default authService;
