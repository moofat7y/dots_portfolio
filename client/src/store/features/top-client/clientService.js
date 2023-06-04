import api from "../../../utils/api";

const getAllClientImages = async (query) => {
  const response = await api.get(`/image/brand?${query}`);

  return response.data;
};

const clientService = { getAllClientImages };

export default clientService;
