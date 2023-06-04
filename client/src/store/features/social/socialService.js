import api from "../../../utils/api";

const getAllSocialImages = async (query) => {
  const response = await api.get(`/image/social?${query}`);

  return response.data;
};

const socialService = { getAllSocialImages };

export default socialService;
