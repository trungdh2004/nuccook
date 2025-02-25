"use client";
import LoadingInitModel from "@/components/loading/LoadingInitModel";
import LoginModel from "@/components/modal/ModalLogin";
import useAuthStore from "@/store/useAuth";
import React, { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { appConfig } from "@/config/appConfig";

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const { fetchUser, isLoading, isLogin } = useAuthStore();

  console.log("init model context");
  

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {isLoading && <LoadingInitModel />}
      {!isLogin && (
        <GoogleOAuthProvider clientId={appConfig.CLIENT_ID_GOOGLE}>
          <LoginModel />
        </GoogleOAuthProvider>
      )}
      {isLoading ? <></> : children}
    </div>
  );
};

export default AuthContext;
