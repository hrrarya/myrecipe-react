import { Link, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.authentication);
  return (
    <div className="root-layout w-full bg-slate-100">
      <Header isAuthenticated={isAuthenticated} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
