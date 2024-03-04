"use client";

import axios from "../axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();
  const refreshToken = async () => {
    const res = await axios.post("/user/refresh", {
      refresh: session?.user.refreshToken,
    });
    console.log("refresh token");

    if (session) session.user.accessToken = res.data.accessToken;
    else signIn();
  };
  return refreshToken;
};
