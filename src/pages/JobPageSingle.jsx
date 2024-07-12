import { useParams, useLoaderData } from "react-router-dom";

const JobPageSingle = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      <div>{job.title}</div>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPageSingle as default, jobLoader };

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Spinner from "../components/Spinner";

// const JobPageSingle = () => {
//   const [job, setJob] = useState({});
//   const { id } = useParams();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (err) {
//         console.log("Error fetching data", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJob();
//   }, []);
//   return <>{loading ? <Spinner /> : <div>{job.title}</div>}</>;
// };

// export default JobPageSingle;
