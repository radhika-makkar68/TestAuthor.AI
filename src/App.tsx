import Home from './Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import QuestionPaper from './QuestionPaper';

function App() {
  return (
    <Router>
    <Routes>

    <Route path="/" Component={Home} />

    <Route path="/question-paper-preview" Component={QuestionPaper} />
    
  </Routes>
  </Router>
  );
}

export default App;
