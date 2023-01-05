import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Crew from "../pages/Crew";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppRoutes;
