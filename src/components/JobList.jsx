import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobList = (props) => {
  const { id, location, salary, title, type } = props.job;
  const [showFullDes, setShowFullDes] = useState(false);
  let description = props.job.description;
  if (!showFullDes) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div key={id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6 text-black">
          <div className="text-gray-600 my-2">{type}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="mb-3 text-black">{description}</div>
        <button
          onClick={() => {
            setShowFullDes((prevState) => !prevState);
          }}
          className="text-indigo-500 mb-2 hover:text-indigo-600"
        >
          {showFullDes ? "less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {location}
          </div>
          <a
            href={`/jobs/${id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobList;