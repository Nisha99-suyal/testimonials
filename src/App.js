import reviews from './data';
import './App.css';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <h1>Our Testimonial</h1>
      <div></div>
      <Testimonial reviews={reviews}/>
    </div>
  );
}

export default App;
