import Header from "@/app/components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#050412]">
      <Header />
      <Dashboard />
    </div>
  );
}
