import React from "react";
import LoginCard from "../components/LoginCard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import authScreeenAtom from "../atoms/authAtoms";
import SignupCard from "../components/SignupCard";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreeenAtom);
  console.log(authScreeenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
