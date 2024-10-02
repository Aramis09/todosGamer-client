import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, initDataAuthContext } from "./initState";
import { jwtService } from "@/services/api";

export const AuthContext = createContext<AuthContextType>(initDataAuthContext);
//*ESTE ES EL HOOK PARA USAR EN LOS COMPONENTES */
export const useAuthContext = () => {
  return useContext(AuthContext);
};
//*ESTE ES EL PROVIDER QUE VA EN LA RAIZ DEL PROYECTO O EN LA CAPA QUE SE NECESITE */
export const ProviderAuthContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const disconnectUser = () => {
    localStorage.removeItem("jwt");
    setIsLogged(false);
  };
  const saveToken = ({ token }: { token: string }) => {
    localStorage.setItem("jwt", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwt");
  };

  useEffect(() => {
    //!Cada vez que se monta la pagina este useEffect valida el token y carga la data del usuario
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      jwtService
        .checkToken({
          token: jwt,
        })
        .then((res) => {
          setIsLogged(res.data.acces);
        });
    }
  }, [isLogged]);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        saveToken,
        disconnectUser,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
