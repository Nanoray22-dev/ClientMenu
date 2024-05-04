import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Todo es<br/>
          Mejor
          con una&nbsp;
          <span className="text-primary">Hamburguesa</span>
        </h1>
        <p className=" my-6 text-gray-500 text-sm">
          Burger is the missing piece that makes every day complete, a simple
          yet delicious joy in
        </p>
        <div className="flex gap-5 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full ">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-500 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className=" relative">
        <Image
          src={"/logo.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Burger"}
        />
      </div>
    </section>
  );
}
