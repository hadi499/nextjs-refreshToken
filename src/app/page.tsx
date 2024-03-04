"use client";

import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import React, { useEffect } from "react";

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const axiosAuth = useAxiosAuth();

  const getProducts = async () => {
    try {
      const res = await axiosAuth.get("http://localhost:8000/product");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const clearData = () => {
    setProducts([]);
  };

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-semibold mb-3">Home Page</h1>
      <div className="flex gap-5 mb-5">
        <button
          className="bg-blue-300 px-2 py-1 rounded-lg hover:bg-blue-800 hover:text-white"
          onClick={getProducts}
        >
          Get Data
        </button>
        <button
          className="bg-red-400 px-2 py-1 hover:bg-red-800 hover:text-white rounded-lg "
          onClick={clearData}
        >
          Clear
        </button>
      </div>
      {products && JSON.stringify(products)}
    </main>
  );
}
