import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { imagesDetail } from "@/utils/consts";
import { Image } from "@chakra-ui/react";

export default function CarrouselDetail() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 10,
    },
  });
  return (
    <div ref={ref} className="keen-slider w-full">
      {imagesDetail.map((url) => (
        <div className="keen-slider__slide max-h-48 w-40 overflow-hidden rounded-2xl object-contain">
          <Image src={url} alt="business" />
        </div>
      ))}
    </div>
  );
}
