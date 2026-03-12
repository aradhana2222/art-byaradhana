import Image from "next/image";
import Navbar from "./navbar/page";
import { Card, CardBody } from "@heroui/card";

export default function Home() {

  const list = [
    {
      title: "Everyday",
      img: "/IMG_0376.PNG",
      price: "$5.50",
    },
    {
      title: "Bombay",
      img: "/eyes2.jpg",
      price: "$3.00",
    },
        {
      title: "mundane",
      img: "/eyes1.jpg",
      price: "$3.00",
    },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white">

      {/* HERO SECTION */}

      <div className="w-full h-[80vh] relative p-6 overflow-hidden">

        <Image
          src="/IMG_0340.jpg"
          alt="Art by Aradhana"
          fill
          className="object-cover z-0"
        />

        {/* glow blobs */}

        <div className="absolute -top-5 -left-20 w-[450px] h-[450px] bg-pink-700/50 blur-3xl rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>

        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-purple-800/50 blur-3xl rounded-full animate-[pulse_7s_ease-in-out_infinite]"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-yellow-700/40 blur-3xl rounded-full animate-[pulse_8s_ease-in-out_infinite]"></div>

        <div className="absolute inset-0 bg-black/40"></div>

        {/* HERO TEXT */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            Aradhana's Art
          </h1>

          <p className="mt-4 text-lg opacity-80">
            Paintings • Sketches • Visual Experiments
          </p>
        </div>

      </div>


      {/* GALLERY TITLE */}

      <div className="text-center py-14">
        <h2 className="text-4xl font-bold tracking-wide">
          Gallery
        </h2>

        <p className="text-gray-400 mt-2">
          A collection of recent artworks
        </p>
      </div>


      {/* GALLERY GRID */}

      <div className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-2 md:grid-cols-3">

        {list.map((item, index) => (

          <Card
            key={index}
            className="group overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
          >

            <CardBody className="p-0 relative overflow-hidden">

              <Image
                alt={item.title}
                src={item.img}
                width={800}
                height={600}
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* hover overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <p className="text-white text-2xl font-semibold tracking-wide">
                  {item.title}
                </p>

              </div>

            </CardBody>

          </Card>

        ))}


      </div>

    </div>
  );
}