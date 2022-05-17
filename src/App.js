import video from './video/vid1.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
