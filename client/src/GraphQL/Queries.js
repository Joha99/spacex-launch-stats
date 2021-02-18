import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query {
    launches {
      flight_number
      mission_name
    }
  }
`;

export const GET_LAUNCH = gql`
  query getLaunchByFlightNumber($flight_number: Int!) {
    Launch(flight_number: $flight_number) {
      mission_name
    }
  }
`;

// export const GET_ROCKETS = gql``;

// export const GET_ROCKET = gql``;
