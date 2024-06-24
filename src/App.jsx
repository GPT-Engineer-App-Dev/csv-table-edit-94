import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";

function App() {
  return (
    <SharedLayout>
      <Router>
        <Routes>
            <Route index element={<Index />} />
        </Routes>
      </Router>
    </SharedLayout>
  );
}

export default App;