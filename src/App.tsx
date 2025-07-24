import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import spinner from "/image/spinner.gif";

function App() {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <img src={spinner} alt="spinner" />
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainLayouts>
                  <Home />
                </MainLayouts>
              </>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
