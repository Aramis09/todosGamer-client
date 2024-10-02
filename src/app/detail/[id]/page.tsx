"use client";
import Loader from "@/components/ui/loader";
import { useBreweryById } from "@/services/hooks/brewery";
import { useParams } from "next/navigation";
import LocationIcon from "../../../public/icons/carrousel/location.svg";
import PhoneIcon from "../../../public/icons/carrousel/phone.svg";
import CarrouselDetail from "@/components/carrousel/carrousel2";
import { comments } from "@/utils/consts";
import { CommentItem } from "@/components/detail/commentItem";
import { Button } from "@chakra-ui/react";

export default function BeerDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: brewery, isLoading } = useBreweryById({
    id,
  });

  if (isLoading || !brewery) return <Loader />;
  return (
    <div className="p-10 pt-20 pb-40 flex flex-col justify-center items-start w-full gap-8 relative">
      <h2 className="text-3xl font-extrabold">{brewery.name}</h2>
      <div className="flex flex-col justify-center w-full  items-center gap-7 self-start">
        <div className="flex justify-start items-center w-full gap-1 relative bg-blue-500">
          <LocationIcon
            style={{
              left: 0,
              position: "absolute",
            }}
          />
          <p className="text-sm absolute left-8">{brewery.address_1}</p>
        </div>
        <div className="flex justify-center items-center w-full gap-1  relative">
          <PhoneIcon
            style={{
              left: 0,
              position: "absolute",
            }}
          />
          <p className="text-sm left-8 absolute">{brewery.phone}</p>
        </div>
      </div>
      <CarrouselDetail />
      <h3 className="text-2xl font-extrabold">Opiniones</h3>
      <div className="flex flex-col justify-center items-start gap-5 w-full">
        {comments.map((person, index) => (
          <CommentItem
            key={index}
            name={person.name}
            text={person.text}
            photo={person.photo}
          />
        ))}
      </div>
      <Button className="bg-gradient-to-r from-[#3b3fe6] to-[#dc1bd7] w-full text-white">
        Reservar mesa
      </Button>
      <div className="w-full bg-gradient-to-r rounded-md from-[#3b3fe6] to-[#dc1bd7] p-[2px]">
        <Button className="w-full rounded-md bg-[#010316] text-white">
          Opciones de transporte
        </Button>
      </div>
    </div>
  );
}
