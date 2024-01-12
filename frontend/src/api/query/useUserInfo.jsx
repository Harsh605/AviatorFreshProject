import { fetchUserData } from "../ClientFunction";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../ContextAndHooks/AuthContext";

export function useUserInfo() {
  const { token: accessToken } = useAuth();
  const url = `/user/getUserInfo`;
  const customHeaders = {
    Authorization: `Bearer ${accessToken}`,
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: () => {
      return fetchUserData(url,customHeaders);
    },
    onError: () => {
      toast.error("Something Went Wrong!...");
    },
    // enabled: false,
  });

  //   const handleButtonClick = async () => {
  //     // Use the mutate function to trigger the API call manually
  //     await queryClient.prefetchQuery(["userData"], () =>
  //       fetchUserData(url, customHeaders)
  //     );
  //   };

  return {
    userData: data,
    error,
    isLoading,
  };
}
