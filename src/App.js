import { useEffect } from 'react';

import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import PostsManager from './components/PostsManager/PostsManager';
import NewPost from './components/NewPost/NewPost';
import { fetchPosts } from './store/actions';


function App(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={PostsManager} />
        <Route path="/new-post" exact component={NewPost} />
      </Switch>
    </div>
  );
}

export default connect(null, { fetchPosts })(App);;
