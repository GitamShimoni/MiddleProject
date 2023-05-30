import Workernavbar from "./Workernavbar";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <Workernavbar></Workernavbar>
      <Outlet></Outlet>
    </>
  );
};

export default Template;
