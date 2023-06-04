import api from "../../../utils/api";

const getStatus = async () => {
  const response = await api.get("/auth/status");

  return response.data;
};

const userService = { getStatus };

export default userService;
