import { Route, Routes } from "react-router-dom";

import UserData from "../pages/UserData";
import UserList from "../pages/UserList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:userName" element={<UserData />} />
    </Routes>
  );
}
