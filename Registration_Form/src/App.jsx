import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FormPage from "./Pages/FormPage";
import UserTable from "./Pages/UserTable";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-[80%] mx-auto mt-20">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/edit/:index" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
