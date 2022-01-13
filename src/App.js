import './App.css';
import RegularSearch from './components/RegularSearch';
import TrendingSearch from './components/TrendingSearch';
import RandomSearch from './components/RandomSearch';

export default function App() {
  return (
    <div>
      <RegularSearch/> 
      <TrendingSearch/>
      <RandomSearch/>
    </div>
      
  );
}

