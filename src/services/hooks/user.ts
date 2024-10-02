'use client'
import { useMutation } from "@tanstack/react-query";
import { userService } from "../api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface UsePostProfessional {
  router: AppRouterInstance
}

export function usePostProfessional({ router }: UsePostProfessional) {
  const res = useMutation({
    mutationFn: userService.createUser,
    mutationKey: ["create-user"],
    onSuccess: () => {
      router.push("/auth/login")
    }
  })
  return res
}


export function useCheckEmailUsed() {
  const res = useMutation({
    mutationFn: userService.checkEmailUsed,
    mutationKey: ["check-email"],
    // onSuccess: () => {
    //   router.push("/")
    // }
  })
  return res
}



export function useUploadPhoto() {
  const res = useMutation({
    mutationFn: userService.uploadPhoto,
    mutationKey: ["upload-photo"],
    // onSuccess: () => {
    //   router.push("/")
    // }
  })
  return res
}


export function useLoginQuery() {
  const res = useMutation({
    mutationFn: userService.login,
    mutationKey: ["login"],
    // onSuccess: () => {
    //   router.push("/")
    // }
  })
  return res
}