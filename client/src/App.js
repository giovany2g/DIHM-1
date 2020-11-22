import "./App.css";
import GetReports from "./components/getReports";
import { Switch, Route } from "react-router-dom";
import CreateReport from "./components/createReport";
import EditReport from "./components/editReport";
import DetailReport from "./components/DetailReport";

import Header from "./components/HeaderV";
import Footer from "./components/FooterV";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header 
      image= "http://www.unicaribe.mx/theme/unicaribe-2018/img/logo-20.png"
      title= "Sistema de servicio social"
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/seeReports" component={GetReports} />
        <Route path="/posts/:id" component={DetailReport} />
        <Route path="/add" component={CreateReport} />
        <Route path="/edit/:id" component={EditReport} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
