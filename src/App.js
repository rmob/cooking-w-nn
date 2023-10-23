import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


// page components
import Home from './pages/home/Home'
import Navbar from './components/Navbar';
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector';

// hooks
import { useTheme } from './hooks/useTheme';

// styles
import './App.css'



function App() {
  const { mode } = useTheme()
  
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route path exact="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
