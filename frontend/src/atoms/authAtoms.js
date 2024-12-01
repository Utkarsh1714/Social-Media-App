import { atom } from "recoil";

const authScreeenAtom = atom({
  key: "authScreenAtom",
  default: "login",
});

export default authScreeenAtom;
