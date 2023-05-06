import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  
  const { token } = useSelector((state) => state); 
  
  return(
    <div>
      <h1>Dashboard</h1>
      <p>Token: { token }</p>
    </div>
  )
}

export default Dashboard;