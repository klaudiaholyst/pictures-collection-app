import { useEffect } from 'react';

import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import PhotosList from './components/PhotosList/PhotosList';
import NewPhoto from './components/NewPhoto/NewPhoto';
import { fetchPhotos } from './store/actions';


function App(props) {
  useEffect(() => {
    props.fetchPosts();
  });
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={PhotosList} />
        <Route path="/new-photo" exact component={NewPhoto} />
      </Switch>
    </div>
  );
}

export default connect(null, { fetchPosts: fetchPhotos })(App);;
