"use client";
import { useRef, useState } from "react";
import ProfileIcon from "../../public/icons/header/profile.svg";
import { Image } from "@chakra-ui/react";

interface Props {
  forceShowImage?: string;
  setImageUploadedFile?: (image: File) => void;
  setImageUploadedBase64Url?: (image: string) => void;
}

export default function ImageUpload({
  forceShowImage,
  setImageUploadedBase64Url,
  setImageUploadedFile,
}: Props) {
  const refInputFile = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const hanlderOpenInputFile = () => {
    refInputFile.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Obtiene el primer archivo

    if (file) {
      if (setImageUploadedFile) setImageUploadedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Actualiza el estado con la URL de la imagen
        if (setImageUploadedBase64Url)
          setImageUploadedBase64Url(reader.result as string);
      };
      reader.readAsDataURL(file); // Lee el archivo como URL de datos
    }
  };
  return (
    <div
      className="w-44 h-44 flex justify-center items-center border-2 border-[#6e717d] rounded-full"
      onClick={hanlderOpenInputFile}
    >
      {imageSrc ? (
        <Image
          src={imageSrc || forceShowImage}
          alt="Uploaded"
          className="w-[168px]  h-[168px] object-cover rounded-full"
        />
      ) : (
        <ProfileIcon
          style={{
            transform: "scale(1.9)",
            color: "#a2a7bd",
          }}
        />
      )}

      <input
        type="file"
        onChange={handleFileChange}
        className="absolute opacity-0 "
        ref={refInputFile}
      />
    </div>
  );
}
