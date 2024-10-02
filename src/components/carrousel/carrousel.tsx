"use client";
import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { image } from "@/utils/consts";
import { Image, Link } from "@chakra-ui/react";
import LocationIcon from "../../public/icons/carrousel/location.svg";
import PhoneIcon from "../../public/icons/carrousel/phone.svg";

interface Props {
  items: ResGetAllBreweries;
}

export default function Carrousel({ items }: Props) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.1,
      spacing: 10,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {items.map((item, index) => (
        <CarrouselCard item={item} key={index} />
      ))}
    </div>
  );
}

const CarrouselCard = ({ item }: { item: Brewery }) => (
  <div className="keen-slider__slide bg-[#13132D] h-48 p-5 flex flex-col gap-2 rounded-xl">
    <h5 className="font-extrabold text-xl">{item.name}</h5>
    <div className="flex justify-start items-center w-full gap-2">
      <Image src={image} alt="sitio" className="w-16 h-16 rounded-full" />
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center gap-1">
          <LocationIcon />
          <p className="text-sm ">{item.address_1}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <PhoneIcon />
          <p className="text-sm ">{item.phone}</p>
        </div>
      </div>
    </div>
    <Link
      href={`/detail/${item.id}`}
      className="mx-5 bg-gradient-to-r from-[#3b3fe6] to-[#dc1bd7] text-white mt-3 rounded-lg flex justify-center items-center font-semibold min-h-9"
    >
      Ver mas
    </Link>
  </div>
);
