import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* PAGE TITLE */}

      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold tracking-wide">
          About the Artist
        </h1>

        <p className="text-gray-400 mt-3">
          Thoughts, inspirations and the person behind the sketches
        </p>
      </div>


      {/* MAIN SECTION */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ARTIST IMAGE */}

        <div className="relative group">
          <Image
            src="/artist.png"
            alt="Artist"
            width={600}
            height={500}
            className="rounded-xl object-cover shadow-xl transition duration-700 group-hover:scale-[1.03] 
            w-full h-[570px] 
            "
          />
        </div>


        {/* TEXT CONTENT */}

        <div className="space-y-6">

          <h2 className="text-3xl font-semibold tracking-wide">
            Hi, I'm Aradhana
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I'm a visual artist exploring emotions, quiet moments and
            everyday life through sketches and digital illustrations.
            My work often focuses on expressive details, soft textures,
            and subtle storytelling with a bit of messy charm. I love capturing the beauty in imperfection and the small, often overlooked moments that make life special.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Most of my pieces start as spontaneous sketches. I enjoy
            experimenting with different moods, colors and compositions
            until the artwork begins to feel alive.
          </p>

          <p className="text-gray-300 leading-relaxed">
            When I'm not drawing, I'm usually collecting references,
            observing people, or exploring visual ideas that later turn
            into new pieces.
          </p>


          {/* TOOLS */}

          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-3">
              Tools & Medium
            </h3>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="border border-gray-700 px-3 py-1 rounded-full">
                Procreate
              </span>
              <span className="border border-gray-700 px-3 py-1 rounded-full">
                Sketchbook
              </span>
              <span className="border border-gray-700 px-3 py-1 rounded-full">
                Digital Illustration
              </span>
            </div>
          </div>

        </div>

      </div>


      {/* SMALL QUOTE / ARTIST STATEMENT */}

      <div className="max-w-3xl mx-auto text-center mt-28">
        <p className="text-xl text-gray-300 italic leading-relaxed">
          “Play with your imagination”
        </p>
      </div>

    </div>
  );
}