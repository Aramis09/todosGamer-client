import { ProviderAuthContext } from "@/context/contextAuth/contextAuth";
import { ProvicerFilterContext } from "@/context/filterContext/filterContext";
import queryClient from "@/services/queryClient";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";

//*AQUI PONEMOS TODOS LOS PROVIDERS QUE SON ASIGNADOS GLOBALMENTE EN EL LAYOUT RAIZ */

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderAuthContext>
        <ProvicerFilterContext>
          <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </CacheProvider>
        </ProvicerFilterContext>
      </ProviderAuthContext>
    </QueryClientProvider>
  );
};
