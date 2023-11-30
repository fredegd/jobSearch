"use client";
import { useState, useEffect } from "react";
import SearchForm from "./_component/SearchForm";
import ResultsDisplay from "./_component/ResultsDisplay";
import jobsJs from "../jobsJs.json";

export default function Home() {
  console.log(jobsJs)
  const [jobs, setJobs] = useState(jobsJs);

  useEffect(() => {
    console.log("jobs", jobs);
  }, [jobs]);
  return (
    <div className="bg-white text-slate-900 w-full h-screen overflow-scroll">
      <div className="w-full  flex items-center justify-center">
        <SearchForm setJobs={setJobs} />
      </div>
      {jobs.length >= 1 ? (
        <div>
          <ResultsDisplay jobs={jobs} />
        </div>
      ) : null}
    </div>
  );
}
