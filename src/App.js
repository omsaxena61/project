import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);
  const [articles, setarticles] = useState([]);
  const setData = (updatedArticles, updatedTotalResults) => {
    setarticles(articles.concat(updatedArticles));
    settotalResults(updatedTotalResults);
  };
  const [totalResults, settotalResults] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar height={4} color="#f11946" progress={progress} />
        <Navbar setData={setData} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="general"
              country="in"
              pageSize={9}
              category="general"
              setData={setData}
            />
          </Route>

          <Route exact path="/business">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="business"
              country="in"
              pageSize={9}
              category="business"
              setData={setData}
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="entertainment"
              country="in"
              pageSize={9}
              category="entertainment"
              setData={setData}
            />
          </Route>

          <Route exact path="/general">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="general"
              country="in"
              pageSize={9}
              category="general"
              setData={setData}
            />
          </Route>

          <Route exact path="/health">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="health"
              country="in"
              pageSize={9}
              category="health"
              setData={setData}
            />
          </Route>

          <Route exact path="/science">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="science"
              country="in"
              pageSize={9}
              category="science"
              setData={setData}
            />
          </Route>

          <Route exact path="/sports">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="sports"
              country="in"
              pageSize={9}
              category="sports"
              setData={setData}
            />
          </Route>

          <Route exact path="/technology">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="technology"
              country="in"
              pageSize={9}
              category="technology"
              setData={setData}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
