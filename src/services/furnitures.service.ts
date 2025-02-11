import { Furniture } from "@/models/Furniture";
import { useQuery, UseQueryResult } from "react-query";

export const useFurnitures = () => {
  return useQuery<Furniture[]>({
    queryKey: "shopConfig",
    queryFn: async () => {
      const shopConfig = window.localStorage.getItem("shopConfig");
      return shopConfig ? await JSON.parse(shopConfig) : [];
    },
  });
};
