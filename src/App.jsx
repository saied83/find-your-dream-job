import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
