import {
  Dispatch,
  SetStateAction,

} from "react";

export interface AuthContextType {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  saveToken: ({ token }: {
    token: string;
  }) => void
  disconnectUser: () => void
  getToken: () => string | null
}

export const initDataAuthContext: AuthContextType = {
  isLogged: false,
  setIsLogged: () => { },
  saveToken: () => { },
  disconnectUser: () => { },
  getToken: () => ""

};


