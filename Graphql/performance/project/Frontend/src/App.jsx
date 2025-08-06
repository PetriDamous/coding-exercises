import { PagePaginate, CursorPaginate, SessionsConcat } from "./components";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PagePaginate />} />
        <Route path="/cursor" element={<CursorPaginate />} />
        <Route path="/sessions" element={<SessionsConcat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
