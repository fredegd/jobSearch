"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Search } from "lucide-react";

export default function SearchForm({ setJobs }) {
  const [searchStatus, setSearchStatus] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm();

  const fetchJobs = async (data) => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: data,
        page: "",
        num_pages: "10",
      },
      headers: {
        "X-RapidAPI-Key": "c41601cc12msh47fe8726c452849p134ce2jsnc8c9069dffc0",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data, "is the result of the query");
        setJobs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data) => {
    setSearchStatus(true);
    const searchQuery = data.jobTitle + " " + data.location;
    fetchJobs(searchQuery);

    reset();
  };

  return (
    <div className="mt-20">
      <h1>Search for Jobs</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2 flex gap-3  items-center p-2  border rounded-lg text-[1rem] bg-gray-50 text-gray-500 ">
          <Search />
          <input
            type="text"
            placeholder="Job Title, Keywords or Company"
            defaultValue={"Junior Developer"}
            {...register("jobTitle", { required: true })}
            className="bg-transparent outline-none p-2 md:w-96"
          />
        </div>
        <div className="my-2 flex gap-3  items-center p-2  border rounded-lg text-[1rem] bg-gray-50 text-gray-500 ">
          <Search />
          <input
            type="text"
            placeholder="City, State or Zip Code"
            defaultValue={"Berlin"}
            {...register("location")}
            className="bg-transparent outline-none p-2 md:w-96"
          />
        </div>
        <input
          type="submit"
          value="Find Jobs"
          className="border-2 rounded-lg p-2 hover:border-orange-500 hover:bg-orange-100"
        />
      </form>
    </div>
  );
}
