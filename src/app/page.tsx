"use client";
import ImageCarousel from "@/components/carrousel/carrousel";
import Loader from "@/components/ui/loader";
import { useFilterContext } from "@/context/filterContext/filterContext";
import useGetAllBreweries from "@/services/hooks/brewery";

export default function Home() {
  const { statePlaceSelected } = useFilterContext();

  const { data: allBreweries, isLoading: isLoadingAllBreweries } =
    useGetAllBreweries({
      statePlaceSelected: undefined,
    });

  const { data: breweriesByState, isLoading: isLoadingByCity } =
    useGetAllBreweries({
      statePlaceSelected: statePlaceSelected || "California",
    });

  if (isLoadingAllBreweries || !breweriesByState || isLoadingByCity) {
    return <Loader />;
  }

  return (
    <div className="py-32 flex flex-col p-5 gap-7">
      <h3 className="font-extrabold text-3xl">Todas las opciones</h3>
      <ImageCarousel items={allBreweries || []} />
      <h3 className="font-extrabold text-3xl">
        Opciones en {statePlaceSelected || "California"}
      </h3>
      <ImageCarousel items={breweriesByState || []} />
    </div>
  );
}
