import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subHeader={"Nuestras Historia"}
          mainHeader={"Sobre nosotros"}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 ">
          <p>
            Hola a todos los amantes de las hamburguesas! Soy Francis Heredia,
            el CEO y chef de Burger Factory, el lugar donde la magia de las
            hamburguesas artesanales cobra vida.<br/> 🍔 En Burger Factory, no solo
            servimos hamburguesas, creamos experiencias memorables. Desde el
            momento en que nuestra deliciosa carne se encuentra con tu paladar
            hasta el último bocado, estamos comprometidos con la excelencia en
            cada detalle.<br/><br/> Nuestro equipo se esfuerza constantemente por llevar
            la pasión por la cocina a un nuevo nivel. ¿Qué nos hace diferentes?
            100% Artesanal: Cada hamburguesa se prepara con amor y dedicación.
            Desde la elección de los ingredientes frescos hasta la creación de
            nuestras salsas secretas, nuestras hamburguesas son únicas y
            auténticas. Variedad Creativa:<br/><br/> En Burger Factory , exploramos un
            mundo de sabores. Desde hamburguesas clásicas hasta opciones
            monstruosas, tenemos algo para todos. Compromiso con la Comunidad:
            No solo somos amantes de la comida, también amamos a nuestra
            comunidad. Estamos comprometidos con causas locales y sostenibles,
            contribuyendo a un mundo mejor.<br/><br/> ¿Por qué seguirnos? Sigue nuestra
            página <a href="https://www.instagram.com/burgerfactoryrd_/" className="text-blue-300">@burgerfactoryrd_ </a>
             para:<br/> ✨ Descubrir las últimas creaciones
            en el mundo de las hamburguesas artesanales.<br/> ✨ Participar en
            sorteos y promociones exclusivas para nuestros seguidores.<br/> ✨
            Mantenerte actualizado sobre eventos especiales y colaboraciones
            emocionantes.<br/> ✨ Inspirarte a llevar la pasión por la comida al
            siguiente nivel. ¡Te invitamos a unirte a nuestra comunidad de
            amantes de las hamburguesas! 🤩🍟🎉
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader 
        subHeader={'No lo dudes'} 
        mainHeader={'Contactanos'}
         />
         <div className="mt-8">
         <a href="tel:+1 (809)860-3538" className="text-4xl underline text-gray-500">+1 (809) 860-3538</a>
         </div>
      </section>
      
    </>
  );
}
