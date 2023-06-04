import api from "../../../utils/api";

const getAllLogoImages = async (query) => {
  const response = await api.get(`/image/logo?${query}`);

  return response.data;
};

const logoService = { getAllLogoImages };

export default logoService;
