import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

export default function Portfolio() {

  const list = [
    { title: "Everyday", img: "/IMG_0376.PNG" },
    { title: "Bombay", img: "/eyes2.jpg" },
    { title: "Sea", img: "/eyes4.jpg" },
    { title: "Sea", img: "/eyes3.webp" },
    { title: "Sea", img: "/eyes5.jpeg" },
    { title: "Drawing", img: "/IMG_0378.PNG" },
    { title: "Kamal", img: "/IMG_0340.PNG" },
    { title: "Dream", img: "/dream1.webp" },
    { title: "Drawing", img: "/IMG_0370.PNG" },
    { title: "Sea", img: "/eyes1.jpg" },
    { title: "Dream", img: "/dream2.webp" },
    { title: "Dream", img: "/dream3.webp" },
    { title: "Dream", img: "/dream4.webp" },
    { title: "Dream", img: "/dream5.webp" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      {/* PAGE TITLE */}

      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold tracking-wide">
          Portfolio
        </h1>

        <p className="text-gray-400 mt-3">
          A collection of sketches and visual explorations
        </p>
      </div>


      {/* MASONRY GALLERY */}

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">

        {list.map((item, index) => (

          <Card
            key={index}
            className="group break-inside-avoid overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
          >

            <CardBody className="p-0 relative">

              <Image
                alt={item.title}
                src={item.img}
                width={800}
                height={800}
                className="w-full h-auto rounded-lg transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                <p className="text-lg font-semibold tracking-wide">
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