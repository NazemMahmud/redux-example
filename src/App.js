import './App.css';
import SongList from "./components/SongList";
import { selectSong } from './actions';

function App() {
  return (
    <div className="App">
        <SongList />
    </div>
  );
}

export default App;
