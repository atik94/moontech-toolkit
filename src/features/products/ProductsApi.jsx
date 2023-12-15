import axios from "../../../src/utils/axios.config";
export const fetchProucts = async () => {
  const data = await axios.get("/products");

  return data.data;
};

export const postProduct = async (productData) => {
  await axios.post("/products", productData);
};

export const deleteProduct = async (id) => {
  await axios.delete(`/products/${id}`);
};
