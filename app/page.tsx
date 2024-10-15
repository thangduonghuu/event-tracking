import Image from "next/image";
import { GoogleTagManager } from '@next/third-parties/google'


export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <GoogleTagManager gtmId="G-TKBW0Z6X8Y" />
    HELLO
    </div>
  );
}
