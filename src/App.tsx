import "devextreme/dist/css/dx.light.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"page-1"} element={<div>Page 1</div>} />
        <Route path={"page-2"} element={<div>Page 2</div>} />
        <Route path={"page-3"} element={<div>Page 3</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
