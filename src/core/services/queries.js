import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
import api from "../config/api";

const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};
const useGetTours = (query) => {
  console.log(query);
  const url = "tour?" + QueryString.stringify(query);

  
  const queryFn = () => api.get(url);
  const queryKey = ["tours", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};
export { useGetUserData, useGetTours };
