import Image from "next/image";
import { GoogleTagManager } from '@next/third-parties/google'


export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <GoogleTagManager gtmId="G-TKBW0Z6X8Y" />
      <div className="w-[95%] h-[20%] bg-white rounded-2xl flex items-center">
        <form>
          <div className="flex gap-4">
          <input type="date" className="text-black" />
          <input type="date" className="text-black" />
          </div>
          <button className="text-black border">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
