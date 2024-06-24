import { gql } from "@apollo/client";
export const GET_LAUNCHES = gql`
query Launches($limit: Int) {
  launches(limit: $limit) {
    details
    id
    mission_id
    mission_name
    launch_year
  }
}
`;
export const GET_LAUNCHE = gql`
query Launch($launchId: ID!) {
  launch(id: $launchId) {
    details
    launch_site {
      site_name
    }
    launch_year
    rocket {
      rocket_name
      rocket_type
    }
    mission_name
    launch_date_utc
  }
}
`;
