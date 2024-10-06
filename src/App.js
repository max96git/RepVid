import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AvatarEditor from './components/AvatarEditor';
import VideoUpload from './components/VideoUpload';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/avatar" component={AvatarEditor} />
            <Route path="/upload" component={VideoUpload} />
          </Switch>
        </div>
      )}
    </Router>
  );
};

export default App;
