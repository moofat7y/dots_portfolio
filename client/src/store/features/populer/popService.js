import api from "../../../utils/api";

const getAllPopImages = async (query) => {
  const response = await api.get(`/image/populer?${query}`);

  return response.data;
};

const popService = { getAllPopImages };

export default popService;
