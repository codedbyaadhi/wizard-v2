import Header from "@/app/components/header/Header";
import Origin from "@/app/components/origin/Origin";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#070615]">
      <Header />
      <Origin />
    </div>
  );
}
