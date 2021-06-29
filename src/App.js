import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import PhotosList from './components/PhotosList/PhotosList';
import NewPhoto from './components/NewPhoto/NewPhoto';
import Signup from './components/authentication/Signup'
import Login from './components/authentication/Login';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import UpdateProfile from './components/authentication/UpdateProfile';
import PrivateRoute from './components/authentication/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import ForgotPassword from './components/authentication/ForgotPassword';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute path="/profile" exact component={ProfileInfo} />
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

export default App;
