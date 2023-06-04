import api from "../../../utils/api";

const getAllPopImages = async (query) => {
  const response = await api.get(`/image/populer?${query}`);

  return response.data;
};
const uploadPopImages = async (data) => {
  const response = await api.put("/upload/populer", data);

  return response.data;
};
const deletePopImage = async (public_id) => {
  const response = await api.delete(`/image/populer?imageId=${public_id}`);

  return response.data;
};

const getAllLogoImages = async (query) => {
  const response = await api.get(`/image/logo?${query}`);

  return response.data;
};
const uploadLogoImages = async (data) => {
  const response = await api.put("/upload/logo", data);

  return response.data;
};
const deleteLogoImage = async (public_id) => {
  const response = await api.delete(`/image/logo?imageId=${public_id}`);

  return response.data;
};

const getAllSocialImages = async (query) => {
  const response = await api.get(`/image/social?${query}`);

  return response.data;
};
const uploadSocialImages = async (data) => {
  const response = await api.put("/upload/social", data);

  return response.data;
};
const deleteSocialImage = async (public_id) => {
  const response = await api.delete(`/image/social?imageId=${public_id}`);

  return response.data;
};

const getAllClientImages = async (query) => {
  const response = await api.get(`/image/brand?${query}`);

  return response.data;
};
const uploadClientImages = async (data) => {
  const response = await api.put("/upload/brand", data);

  return response.data;
};

const updateClientLink = async (imgId, link) => {
  const response = await api.patch(`/image/brand/link/${imgId}`, link);
  return response.data;
};

const deleteClientImage = async (public_id) => {
  const response = await api.delete(`/image/brand?imageId=${public_id}`);

  return response.data;
};

const getAllBrandImages = async (query) => {
  const response = await api.get(`/image/brand-design?${query}`);

  return response.data;
};

const uploadBrandImages = async (data) => {
  const response = await api.put("/upload/brand-design", data);

  return response.data;
};

const updateBrandCategory = async (imgId, link) => {
  const response = await api.patch(`/image/brand/category/${imgId}`, link);
  return response.data;
};

const deleteBrandImage = async (public_id) => {
  const response = await api.delete(`/image/brand-design?imageId=${public_id}`);

  return response.data;
};
const imagesService = {
  getAllPopImages,
  uploadPopImages,
  deletePopImage,
  getAllLogoImages,
  uploadLogoImages,
  deleteLogoImage,
  getAllSocialImages,
  uploadSocialImages,
  deleteSocialImage,
  getAllClientImages,
  uploadClientImages,
  deleteClientImage,
  updateClientLink,
  getAllBrandImages,
  uploadBrandImages,
  updateBrandCategory,
  deleteBrandImage,
};

export default imagesService;
