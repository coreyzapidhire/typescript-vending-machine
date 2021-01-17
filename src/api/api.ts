import axios from "axios";
import { IItem } from "../types";

export const getProducts = async () => {
  return await axios
    .get("http://localhost:3001/products")
    .then((res) => res.data);
};

export const getProductById = async (id: number) => {
  return await axios
    .get(`http://localhost:3001/products/${id}`)
    .then((res) => res.data);
};

export const updateProduct = async (id: number, body: Partial<IItem>) => {
  return await axios
    .patch(`http://localhost:3001/products/${id}`, body)
    .then((res) => res.data);
};


