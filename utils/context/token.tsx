"use client";

import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";

import { useToast } from "@/components/ui/use-toast";
import axiosWithConfig, { setAxiosConfig } from "../axiosWithConfig";
import { Profile, getProfile } from "@/utils/apis/users";

interface Context {
  token: string;
  user: Partial<Profile>;
  changeToken: (token?: string) => void;
  refetchProfile: () => void;
}

interface Props {
  children: ReactNode;
}

const TokenContext = createContext<Context | undefined>(undefined);

export function TokenProvider({ children }: Readonly<Props>) {
  const { toast } = useToast();

  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<Partial<Profile>>({});

  useEffect(() => {
    const storedToken = localStorage.getItem("token") ?? "";
    setToken(storedToken);
    setAxiosConfig(storedToken);
    if (storedToken) {
      fetchProfile(storedToken);
    }
  }, []);

  useEffect(() => {
    setAxiosConfig(token);
  }, [token]);

  useEffect(() => {
    const interceptor = axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          changeToken();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosWithConfig.interceptors.response.eject(interceptor);
    };
  }, [changeToken]);

  const fetchProfile = useCallback(
    async (currentToken: string) => {
      try {
        const result = await getProfile(currentToken);
        setUser(result.data.user);
      } catch (error: any) {
        toast({
          title: "Oops! Something went wrong.",
          description: error.message.toString(),
          variant: "destructive",
        });
      }
    },
    [toast]
  );

  const refetchProfile = useCallback(() => {
    fetchProfile(token);
  }, [fetchProfile, token]);

  const changeToken = useCallback((newToken?: string) => {
    const updatedToken = newToken ?? "";
    setToken(updatedToken);
    if (newToken) {
      localStorage.setItem("token", updatedToken);
    } else {
      localStorage.removeItem("token");
      setUser({});
    }
  }, []);

  const tokenContextValue = useMemo(
    () => ({
      token,
      user,
      changeToken,
      refetchProfile,
    }),
    [token, user, changeToken, refetchProfile]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error(
      "ERROR, useToken must be used within TokenProvider"
    );
  }
  return context;
}
