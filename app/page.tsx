import Image from "next/image";

export default function Home() {
  const dogs = [
    {
      name: "Sydney",
      transform: "md:scale-110 -rotate-6",
    },
    {
      name: "Dorra",
      transform: "scale-75 rotate-6 translate-x-2 translate-y-15",
    },
    {
      name: "Olly",
      transform: "md:scale-110 rotate-6",
    },
    {
      name: "Coby",
      transform: "md:scale-125 translate-y-11 ",
    },
    {
      name: "Danny",
      transform: "scale-75 -rotate-6 translate-x-2 translate-y-15 skew-y-6",
    },
    {
      name: "Rue",
      transform: "scale-75 md::scale-110 -rotate-45",
    },
  ];

  return (
    <main className="py-20 px-10 p-16 m-auto max-w-4xl">
      <h1 className="text-purple-951">Hi Doggos🐶!</h1>
      <h2 className="my-12">The best doggos in town</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12 my-20 lg:my-32">
        {dogs.map(({ name, transform }, index) => {
          return (
            <div
              key={name}
              className={`border-2 border-opacity-50 border-indigo-400 rounded-xl px-5 py-5 shadow-xl shadow-purple-300 backdrop-blur-sm bg-white/30 ${transform} hover:bg-purple-200 hover:scale-105 hover:transition hover:duration-500`}>
              <div className="my-3">
                <h2>{name}</h2>
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  src={`/images/${index + 1}.png`}
                  height={160}
                  width={260}
                  alt={name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
