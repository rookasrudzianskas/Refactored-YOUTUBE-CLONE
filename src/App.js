import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    <div className="app">

    {/*    Header   */}
        <Header />
    {/*    Sidebar  */}
        <div className="app__page">
            <Sidebar />

            <RecommendedVideos />
            {/*    Recommended video    */}
        </div>

    </div>
  );
}

export default App;
