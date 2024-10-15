import Image from "next/image";
import { GoogleAnalytics  } from '@next/third-parties/google'


export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <GoogleAnalytics  gaId="G-TKBW0Z6X8Y" />
    HELLO
    </div>
  );
}
