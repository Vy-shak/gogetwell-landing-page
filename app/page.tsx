import { Hero, Navbar,Video,Numbers,Aipowered,Solutions,Ourmission } from "./index"

export default function Home() {
  return (
    <section className="flex pb-16 flex-col items-center justify-center w-full ">
      <Navbar />
      <section className="w-full flex pt-22 md:pt-32  px-4 md:px-6 items-center justify-center">
        <Hero />
      </section>
      <Video />
        <section className="w-full flex pt-6 md:pt-8  px-4 md:px-6 items-center justify-center">
          <Numbers/>
        </section>
      <section className="w-full flex pt-6 md:pt-8   items-center justify-center">
        <Aipowered/>
      </section>
      <section className="w-full flex pt-6 md:pt-8  px-4  items-center justify-center">
        <Solutions/>
      </section>
      <section className="w-full flex pt-6 md:pt-8  px-4  items-center justify-center">
        <Ourmission />
      </section>
    </section>
  );
}
