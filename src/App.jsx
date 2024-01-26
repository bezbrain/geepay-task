import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import SharedLayout from "./components/sharedLayouts/shared/sharedLayout";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout isDark={isDark} />}>
            <Route index element={<Dashboard isDark={isDark} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
