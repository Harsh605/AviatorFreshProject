import { requestData } from "./../ClientFunction";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

export function SendOtp() {
  const url = `/auth/otp/verify`;
  const response = useMutation({
    mutationFn: (data) => {
      return requestData("post", url, data);
    },
    onError: () => {
      toast.error("Something Went Wrong!...");
    },
  });

  return response;
}
