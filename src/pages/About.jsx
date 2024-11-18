// imagenes
import Nosotros from "../img/about.jpg";

export const About = () => {
  return (
    <section className="text-justify max-w-[1100px] mx-auto mt-[120px] sm:mt-10 py-12 px-5">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-3xl mb-3 font-bold text-primary uppercase">
          Nosotros
        </h2>
        <div className="flex items-center justify-center gap-5">
          <p className="text-primary">
            Bienvenido a Joselito, dedicada a la producción y comercialización
            de productos de panadería y repostería de alta calidad. Nos
            especializamos en la elaboración de bizcochos, alfajores y otros
            productos derivados de la harina, utilizando ingredientes frescos y
            naturales. Nuestros productos se distribuyen tanto en nuestro local
            como a través de alianzas con tiendas minoristas, siempre enfocados
            en brindar una experiencia única de sabor a nuestros clientes.
            <br />
            Gracias por visitar nuestra tienda en línea. Siéntete libre de
            explorar nuestros productos y si tienes alguna pregunta, no dudes en
            ponerte en contacto con nosotros. ¡Esperamos que disfrutes de tu
            experiencia de compra en nuestra tienda en línea!
          </p>
          <img
            className="hidden lg:block lg:w-[450px] rounded-lg"
            src={Nosotros}
            alt="Imagen nosotros"
          />
        </div>
      </div>
      {/* mision y vision */}
      <div className="flex items-center justify-center gap-10 my-10">
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Misión
          </h3>
          <p className="text-primary">
            "Nuestra misión es Ofrecer productos que deleiten los sentidos,
            utilizando ingredientes de alta calidad, fomentando prácticas
            sostenibles, y proporcionando una experiencia de compra cálida y
            cercana, contribuyendo así al bienestar de nuestros clientes y la
            comunidad."
          </p>
        </div>
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Visión
          </h3>
          <p className="text-primary">
            "Nuestra visión es convertirnos en una referencia regional en la
            producción artesanal, destacándonos por la innovación en sabores y
            productos, el compromiso con la sostenibilidad, y el fortalecimiento
            de relaciones duraderas con nuestros clientes y socios comerciales."
          </p>
        </div>
      </div>
    </section>
  );
};
