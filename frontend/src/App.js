import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  const Header = () => <h2>Header</h2>
  const Dashboard = () => <h2>Dashboard</h2>
  const SurveyNew = () => <h2>SurveyNew</h2>
  const Landing = () => <h2>Landing</h2>

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
