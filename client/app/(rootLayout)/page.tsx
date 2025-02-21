import Image from "next/image";
import Logo from "../components/common/Logo";

export default function Home() {
  return (
    <div className="px-2 md:px-4">
      <div className="w-full h-[180px] md:h-[240px] bg-gradient-to-r from-[#fe881c] to-[#fdce1c] rounded-md flex items-center justify-between overflow-hidden relative p-4">
        <div className="absolute min-w-[400px] inset-0 left-0 top-0">
          <Image
            src="/banner5.jpg"
            alt="banner"
            height={872}
            width={1920}
            className=" w-full h-auto object-cover"
          />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center relative z-[2]">
          <div className="flex items-center gap-2 py-1 px-2 md:px-4 bg-white/70 rounded-md">
            <Logo className="size-8 md:size-10" />
            <div>
              <h1 className="font-bold text-lg md:text-xl space-x-1 bg-gradient-to-r from-orange-600 to-blue-500 text-transparent bg-clip-text">
                Cooknuc
              </h1>
            </div>
          </div>

          <div className="mt-2 py-1 px-2 bg-black/40 rounded-md rounded-md0">
            <h2 className="text-base text-center sm:text-xl md:text-2xl text-white  font-bold">
              Nấu Ăn Thật Dễ – Cùng Vào Bếp Ngay!
            </h2>
          </div>
        </div>
      </div>


      <section className="py-10">
        hihi
      </section>
    </div>
  );
}
