import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import PostComponents from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostComponents />
    </QueryClientProvider>
  );
}
