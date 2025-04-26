import { Hero, Navbar,Video } from "./index"

export default function Home() {
  return (
    <section className="flex pb-16 flex-col items-center justify-center w-full ">
      <Navbar />
      <section className="w-full flex pt-22 md:pt-32  px-4 items-center justify-center">
        <Hero />
      </section>
      <Video />
    </section>
  );
}
