import { BrowserRouter as Router } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./Actions/questions";
import { fetchAllUsers } from "./Actions/users";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
