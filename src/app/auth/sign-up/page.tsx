"use client";
import { Button, Input, Stack, useToast } from "@chakra-ui/react";
import ImageUpload from "@/components/ui/imageUpload";
import { useState } from "react";
import {
  useCheckEmailUsed,
  usePostProfessional,
  useUploadPhoto,
} from "@/services/hooks/user";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const toast = useToast();
  const router = useRouter();
  //!Fields
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const { mutateAsync: createUserMutation } = usePostProfessional({
    router,
  });
  const { mutateAsync: checkEmailUsedMutation } = useCheckEmailUsed();
  const { mutateAsync: uploadPhotoMutation } = useUploadPhoto();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //?Si las passwords no son iguales tiramos el toast
    if (password !== repeatPassword)
      return toast({
        title: "The passwords are not same",
        position: "top",
      });

    //?Verificamos que el mail no este en uso
    const { data: resCheckedEmail } = await checkEmailUsedMutation({ email });

    if (!resCheckedEmail.data.validEmail) {
      return toast({
        title: "The email is already used by another user",
        position: "top",
      });
    }
    //?Subimos la foto
    if (!profilePhoto) {
      return toast({
        title: "The photo is mandatory",
        position: "top",
      });
    }

    const formData = new FormData();
    formData.append("postImage", profilePhoto);

    const { data } = await uploadPhotoMutation({
      body: formData,
    });

    if (!data?.url) {
      return toast({
        title: "The photo was wrong",
        position: "top",
      });
    }
    //?Creamos el profesional
    createUserMutation({
      body: {
        name,
        lastName,
        email,
        password,
        imageProfile: data.url,
      },
    })
      .then(() =>
        toast({
          title: "User created !",
          position: "top",
        })
      )
      .catch(() =>
        toast({
          title: "Error !",
          position: "top",
        })
      );
  };

  return (
    <div className="px-5 flex flex-col gap-5 justify-center items-center w-full min-h-screen pb-52">
      <ImageUpload setImageUploadedFile={setProfilePhoto} />
      <form onSubmit={handleSubmit} className="w-full">
        {/* Añadir un formulario */}
        <Stack spacing={3} className="min-h-full w-full">
          <Input
            placeholder="Name"
            size="lg"
            value={name}
            required
            onChange={(e) => setName(e.target.value)} // Establecer el estado para el nombre
          />
          <Input
            required
            placeholder="Last Name"
            size="lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // Establecer el estado para el apellido
          />
          <Input
            required
            placeholder="Email"
            type="email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Establecer el estado para el correo electrónico
          />
          <Input
            required
            placeholder="Password"
            size="lg"
            type="password" // Hacer que el input de contraseña sea de tipo 'password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Establecer el estado para la contraseña
          />
          <Input
            required
            placeholder="Repeat Password"
            size="lg"
            type="password" // Hacer que el input de repetir contraseña sea de tipo 'password'
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)} // Establecer el estado para repetir contraseña
          />
          <Button
            type="submit" // Hacer que el botón envíe el formulario
            colorScheme="teal"
            size="lg"
            className="bg-gradient-to-r from-[#3b3fe6] to-[#dc1bd7] w-full"
          >
            Create account
          </Button>
        </Stack>
      </form>
    </div>
  );
}
