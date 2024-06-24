import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHE } from "../grapql/queries";
import moment from "moment";
const LaunchDetails = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_LAUNCHE, {
    variables: {
      launchId: id,
    },
  });
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { mission_name, launch_year, launch_date_utc, details, rocket } =
    data.launch;
  const { rocket_name } = rocket;
  return (
    <div>
      <h1>
        Mission <span>{mission_name}</span>
      </h1>
      <h3>Rocket :- {rocket_name}</h3>
      <div>
        <h2>Launch year:-{launch_year}</h2>
        <h2>
          Launch Date :- {moment(launch_date_utc).format("DD-MM-YYYY HH:MM A")}
        </h2>
      </div>
      {details && (
        <div>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};
export default LaunchDetails;
