import React, { useEffect, useState } from "react";
import useAuth0 from "../auth/useAuth0";
import Nav from "./Nav";
import { get } from "../utils/api";

const Dashboard = () => {
  const { user } = useAuth0();
  const [dispensaryUser, setDispensaryUser] = useState(null);

  useEffect(() => {
    const effect = async () => {
      try {
        const dispensaryUser = await get(`dispensaryUsers/${user.sub}`);
        setDispensaryUser(dispensaryUser);
      } catch (error) {
        console.log(error);
        if (error.name === "HTTPError") {
          if (error.status === 404) {
            console.log("No dispensary user");
          }
        } else {
          throw error;
        }
      }
    };

    effect();
  }, [user.sub]);

  return (
    <div className="w-full h-full flex flex-col">
      <Nav></Nav>
      <div className="flex flex-1 justify-center items-center flex-col">
        <div className="mb-4">Logged in as: {user.email}</div>
      </div>
    </div>
  );
};

export default Dashboard;
