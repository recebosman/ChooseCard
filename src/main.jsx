import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import ResultTable from "./components/ResultTable";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/game" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result-table" element={<ResultTable />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
