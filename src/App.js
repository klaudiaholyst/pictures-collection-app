import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PicturesCollection from './components/PicturesCollection/PicturesCollection';
import NewPost from './components/NewPost/NewPost';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={PicturesCollection} />
        <Route path="/new-post" exact component={NewPost} />
      </Switch>
    </div>
  );
}

export default App;
