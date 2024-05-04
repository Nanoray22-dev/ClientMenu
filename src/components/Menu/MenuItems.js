export default function MenuItems() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md  hover:shadow-black/25 transition-all">
        <div className="text-center ">
        <img src="/bfactory.jpeg" alt="hamburguesa" className=" max-h-auto max-h-54  block mx-auto rounded-lg" />
        </div>
      
      <h4 className="font-semibold my-3 text-xl">Romerito Burger</h4>
      <p className="text-gray-500 text-sm">
        lorem ipsum dolor sit amet, consectetur adip occurence odio just
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Agregar al carrito $350
      </button>
    </div>
  );
}
