import { PagePaginate, CursorPaginate } from "./components";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PagePaginate />} />
        <Route path="/cursor" element={<CursorPaginate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
