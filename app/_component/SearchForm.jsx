import { Search } from "lucide-react";

export default function SearchForm() {
  return (
    <div className="mt-20">
      <h1>Search for Jobs</h1>
      <form>
        <div className="my-1 flex gap-3  items-center p-2  border rounded-lg text-[1rem] bg-gray-50 text-gray-500 ">
          <Search />
          <input
            type="text"
            placeholder="Job Title, Keywords or Company"
            className="bg-transparent outline-none p-2 md:w-96"
          />
        </div>
        <div className="my-1 flex gap-3  items-center p-2  border rounded-lg text-[1rem] bg-gray-50 text-gray-500 ">
        <Search />
          <input
            type="text"
            placeholder="City, State or Zip Code"
            className="bg-transparent outline-none p-2 md:w-96"
          />
        </div>
        <input type="submit" value="Find Jobs" className="border-2 rounded-lg p-2 hover:border-orange-500 hover:bg-orange-100"/>
      </form>
    </div>
  );
}
