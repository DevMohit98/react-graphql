import "./launch-card.component.css";
import { useNavigate } from "react-router-dom";
const LaunchCard = ({ details, missionName, launchYear, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="launchcard-containter"
      onClick={() => navigate(`/launch-details/${id}`)}>
      <h1 className="launch-title">{missionName}</h1>
      <h2 className="launch-year">
        <i>Launch Year:-</i> {launchYear}
      </h2>
      {details && (
        <div className="launch-details-container">
          <h3>
            <b>Launch Details</b>
          </h3>
          <p className="launch-details">{details}</p>
        </div>
      )}
    </div>
  );
};
export default LaunchCard;
