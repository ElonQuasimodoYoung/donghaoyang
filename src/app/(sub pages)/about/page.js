import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
      
      <div className="w-full h-screen absolute top-1/3 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel/>
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl text-accent">
            Donghao Yang(Elon Young)
          </h1>
          <br/>
          <p className="font-light text-foreground text-ls">
            A front-end developer who has no idea about front-end.
          </p>
        </div>
      </div>
      <AboutDetails/>
    </>
  );
}
