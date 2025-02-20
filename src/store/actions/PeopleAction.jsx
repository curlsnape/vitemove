import React from "react";
import { useSelector } from "react-redux";

function PeopleAction() {
  const d = useSelector((state) => state);
  console.log(d);
  return <div>PeopleAction</div>;
}

export default PeopleAction;
