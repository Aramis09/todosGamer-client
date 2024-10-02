import { Image } from "@chakra-ui/react";

export const CommentItem = ({
  name,
  text,
  photo,
}: {
  name: string;
  text: string;
  photo: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-3">
        <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
          <Image width={50} src={photo} alt="photo" className="rounded-full" />
        </div>
        <p className="font-semibold ">{name}</p>
      </div>
      <p className="text-xs font-bold text-[#E41AD6]">Responder</p>
    </div>
    <p className=" font-medium text-xs">{text}</p>
  </div>
);
