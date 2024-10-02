"use client";
import { Button, Image, Input, Stack, useToast } from "@chakra-ui/react";
import ProfileIcon from "../../../public/icons/header/profile.svg";
import { useState } from "react";
import { useLoginQuery } from "@/services/hooks/user";
import { useAuthContext } from "@/context/contextAuth/contextAuth";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const { saveToken, setIsLogged } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUferFound, setPhotoUferFound] = useState<string>();

  const { mutateAsync: makeLoginMutation, isPending } = useLoginQuery();

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    const response = await makeLoginMutation({
      body: {
        email,
        password,
      },
    }).catch((err) => {
      if (err.response?.data?.data?.photo) {
        setPhotoUferFound(err.response?.data?.data?.photo);
        return toast({
          title: "Incorrect password",
          position: "top",
        });
      }
      return toast({
        title: "Incorrect credentials",
        position: "top",
      });
    });

    if (typeof response === "object" && response.data.data.token) {
      saveToken({
        token: response.data.data.token,
      });
      setIsLogged(true);
      router.push("/");
    }
  };

  if (isPending) return <Loader />;

  return (
    <div className="px-5 flex flex-col gap-5 justify-center items-center w-full min-h-screen pb-52">
      <ShowImage showByURL={photoUferFound} />
      <form onSubmit={handleSubmit} className="w-full">
        <Stack spacing={3} className="min-h-full w-full">
          <Input
            placeholder="Email"
            size="lg"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            size="lg"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit" // Hacer que el botón envíe el formulario
            colorScheme="teal"
            size="lg"
            className="bg-gradient-to-r from-[#3b3fe6] to-[#dc1bd7] w-full"
          >
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
}

const ShowImage = ({ showByURL }: { showByURL?: string }) => {
  return (
    <div className="w-44 h-44 flex justify-center items-center border-2 border-[#6e717d] rounded-full">
      {!showByURL ? (
        <ProfileIcon
          style={{
            transform: "scale(1.9)",
            color: "#a2a7bd",
          }}
        />
      ) : (
        <Image
          src={showByURL}
          alt="user"
          width={40}
          height={40}
          className="w-[168px]  h-[168px] object-cover rounded-full"
        />
      )}
    </div>
  );
};
