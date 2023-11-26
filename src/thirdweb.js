import { useStorage } from "@thirdweb-dev/react";

export default function Component() {
  const storage = useStorage();
  storage?.download(); 
  storage?.upload(); 
}