import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../src/components/Header";
// import MainNav from "./components/MainNav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList/index_old";
import Table from "./pages/EmployeeList";
import TableList from "./pages/EmployeeList/index_v2";
import Error from "./pages/Error";

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        {/* <MainNav /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/employee-list" element={<Table />}></Route>
          <Route
            exact
            path="/employee-list-bis"
            element={<TableList />}
          ></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
