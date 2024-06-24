import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../grapql/queries";
import { LaunchCard } from "../component";
const Home = () => {
  const {
    loading,
    error,
    data: launchesDetails,
  } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 10,
    },
  });
  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <h1 className="home-title">SpaceX</h1>
      <div className="launchCard-container">
        {launchesDetails.launches.map((launchesData, index) => {
          const { details, mission_name, launch_year, id } = launchesData;
          return (
            <LaunchCard
              details={details}
              missionName={mission_name}
              launchYear={launch_year}
              key={index}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
