import api from "../../../utils/api";

const getAllBrandImages = async (query) => {
  const response = await api.get(`/image/brand-design?${query}`);

  return response.data;
};

const brandService = { getAllBrandImages };

export default brandService;
