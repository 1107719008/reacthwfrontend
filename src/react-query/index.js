import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from "../api";
import { getInfoById, getInfos } from '../api';

export const useProducts = (url) => {
   const { data, isLoading } = useQuery([url], getProducts)
   return { data, isLoading };
};

export const useProductById = (productId) => {
   const { data, isLoading } = useQuery([productId], getProductById)
   return { data, isLoading };
}

export const useInfos = (url) => {
   const { data, isLoading } = useQuery([url], getInfos)
   return { data, isLoading };
};

export const useInfoById = (infoId) => {
   const { data, isLoading } = useQuery([infoId], getInfoById)
   return { data, isLoading };
}


