import { useQuery } from "@tanstack/react-query";
import { breweryService } from "../api";

interface UseGetAllBreweries {
  statePlaceSelected?: string
}

export default function useGetAllBreweries({ statePlaceSelected }: UseGetAllBreweries) {
  const res = useQuery({
    queryKey: ["useGetAllBreweries", statePlaceSelected],
    queryFn: () =>
      breweryService.getAll({
        statePlaceSelected: statePlaceSelected
      }),
  });

  return {
    ...res,
    data: res.data ? res.data?.data : undefined
  }
}

interface UseBreweryById {
  id?: string
}

export function useBreweryById({ id }: UseBreweryById) {
  const res = useQuery({
    queryKey: ["useBreweryById", id],
    queryFn: () =>
      breweryService.getById({
        id: id!
      }),
    enabled: !!id
  });

  return {
    ...res,
    data: res.data ? res.data?.data : undefined
  }
}