import React from "react";
import { AuthGetApi } from "@/lib/fetchApi";

const AdminPage = async () => {
  const products = await AuthGetApi("/product");
  return (
    <div className="w-96 mx-auto mt-5 ">
      <h1 className="text-2xl font-semibold text-center mb-5">Admin Page</h1>

      {products.map((product: any) => (
        <div className="flex gap-2 mb-3" key={product.id}>
          <h1>{product.name}</h1>
          <p className="font-semibold text-blue-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
