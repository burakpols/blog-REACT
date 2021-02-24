import './App.css';
import React,{Fragment} from "react";
import Header from "./Components/Header";
import {Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blog/Blogs";
import BlogDetail from "./Components/Blog/BlogDetail";
import ContactPage from "./Components/ContactPage";
import NotFound from "./Components/NotFound";
import Login from "./Components/LoginPage";
import { Container } from 'reactstrap';
import PrivateRoutes from './Routes/PrivateRoutes';
import UpdateBlog from "./Components/Blog/UpdateBlog";
import AddBlog from "./Components/Blog/AddBlog";

function App() {
  return (
    <Fragment>
      <Header/>
      <Container>
        <Switch>
          <Route exact path= "/" component={HomePage}/>
          <Route exact path= "/blogs" component={Blogs} />
          <PrivateRoutes path= {"/addblog"} component={AddBlog} />
          <PrivateRoutes path={"/updateblog/:id"} component={UpdateBlog} />
          <Route exact path= "/blogs/:id" component={BlogDetail} />
          <Route exact path= "/contact" component={ContactPage} />
          <Route exact path= "/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Fragment>
      
    
  );
}

export default App;
