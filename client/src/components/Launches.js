import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_LAUNCH, GET_LAUNCHES } from "../GraphQL/Queries";

function Launches() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    if (data) {
      const response = data.launches;
      setLaunches(response);
      console.log(launches);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Launches</div>;
}

export default Launches;
