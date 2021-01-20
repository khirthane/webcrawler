import './App.css';
import Header from './components/layout/header';
import WebCrawler from './components/pages/crawler';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <WebCrawler/>
    </div>
  );
}

export default App;
