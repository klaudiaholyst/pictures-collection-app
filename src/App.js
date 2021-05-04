import { useEffect } from 'react';

import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import PhotosList from './components/PhotosList/PhotosList';
import NewPhoto from './components/NewPhoto/NewPhoto';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

import { fetchPhotos } from './store/actions';

import './App.css';
import { Container } from "react-bootstrap";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';


function App(props) {
  useEffect(() => {
    props.fetchPosts();
  });
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute path="/profile" exact component={Dashboard} />
          <PrivateRoute path="/update-profile" exact component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/" exact component={PhotosList} />
          <Route path="/new-photo" exact component={NewPhoto} />
        </Switch>

      </AuthProvider>
    </div>
  );
}

export default connect(null, { fetchPosts: fetchPhotos })(App);;
