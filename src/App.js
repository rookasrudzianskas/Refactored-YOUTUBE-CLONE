import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
        <Router>


            {/*    Header   */}
            <Header />

            <Switch>
                <Route path="/search/:searchTerm">
                    <div className="app__page">
                        <Sidebar />
                        <SearchPage />
                    </div>
                </Route>
                <Route path="/">

                    {/*    Sidebar  */}
                        <div className="app__page">
                            <Sidebar />

                            <RecommendedVideos />
                            {/*    Recommended video    */}
                        </div>

                </Route>
            </Switch>



        </Router>


    </div>
  );
}

export default App;
