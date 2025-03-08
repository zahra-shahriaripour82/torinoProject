import { useMutation,useQueryClient } from "@tanstack/react-query";
import { setCookie } from "../utils/cookie.js";
import api from "../config/api.js";

const useSendOtop = () => {
  
  const mutationFn = (data) => api.post("auth/send-otp", data);

  
  return useMutation({ mutationFn });
};
const useCheckOtop = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    console.log(data);
    
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess});
};

export { useSendOtop, useCheckOtop };
