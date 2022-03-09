import PostList from "./components/PostList";
import SongDetails from "./components/SongDetails";

function App() {
  return (
    <div className="ui container">
        <div className="ui row">
            <div className="column eight wide">
                <PostList />
            </div>
            <div className="column eight wide">
                <SongDetails />
            </div>
        </div>
    </div>
  );
}

export default App;
