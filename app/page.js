import Image from "next/image";
import SearchForm from "./_component/SearchForm";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 w-full h-screen overflow-scroll">
      <div className="w-full  flex items-center justify-center">
        <SearchForm />
      </div>
    </div>
  );
}
