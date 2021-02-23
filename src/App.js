import { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import PicturesCollection from './components/PicturesCollection/PicturesCollection';
import NewPost from './components/NewPost/NewPost';
import DataContext from './context/DataContext';

function App() {
  const [picturesData, setPicturesData] = useState([]);

  const getPicturesData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setPicturesData(responseData);
      });
  };

  useEffect(() => {
    getPicturesData();
  }, []);

  return (
    <div className="App">
      <Header />
      <DataContext.Provider value={picturesData}>
        <Switch>
          <Route path="/" exact component={PicturesCollection} />
          <Route path="/new-post" exact component={NewPost} />
        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;
