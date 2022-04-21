import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Example from "./components/Query";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </div>
  );
}

export default App;
