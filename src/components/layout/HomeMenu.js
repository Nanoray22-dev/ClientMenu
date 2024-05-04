import Image from "next/image";
import MenuItems from "../Menu/MenuItems";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start ">
        <div className=" absolute left-0 -top-[70px]  -z-10 text-left">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"salad"} />
        </div>
        <div className=" absolute right-0 -top-[100px] -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"salad"} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeader 
        subHeader={"check out"} 
        mainHeader={"Menu"} 
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
}
