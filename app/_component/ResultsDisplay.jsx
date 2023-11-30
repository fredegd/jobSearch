"use client";
import Link from 'next/link'
import { useEffect } from "react";
import Markdown from 'react-markdown'


export default function ResultsDisplay({ jobs }) {
  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  return (
    <div className="m-3">
     
      {jobs.length > 1 ? (
        <div>
          <h1>Results:</h1>
          {jobs.map((job, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold my-3">{job.job_title}</h2>
                <Link href={job.job_apply_link} target='blank' className='border hover:border-orange-600  rounded-lg flex justify-center items-center p-3'>
                    <h4>apply Now</h4>
                </Link>
              </div>
              <h3 className="text-2xl my-3">{job.employer_name}</h3>

              <Markdown>{job.job_description}</Markdown>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
