"use client";
import Store from "@/Redux/Store";
import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>{children}</Provider>
    </QueryClientProvider>
  );
};

export default MainProvider;
