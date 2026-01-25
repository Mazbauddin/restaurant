import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="p-2 hidden md:block">Order ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Price</th>
            <th className="p-2 hidden md:block">Products</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample order data */}
          <tr className="text-sm md:text-base bg-red-100">
            <td className="py-6 px-1 hidden md:block">12345</td>
            <td className="py-6 px-1 ">22.01.2026</td>
            <td className="py-6 px-1 ">$15.99</td>
            <td className="py-6 px-1 hidden md:block">Burger, Fries</td>
            <td className="py-6 px-1">On the way (approx, 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="py-6 px-1 hidden md:block">12345</td>
            <td className="py-6 px-1 ">22.01.2026</td>
            <td className="py-6 px-1 ">$15.99</td>
            <td className="py-6 px-1 hidden md:block">Burger, Fries</td>
            <td className="py-6 px-1">On the way (approx, 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="py-6 px-1 hidden md:block">12345</td>
            <td className="py-6 px-1 ">22.01.2026</td>
            <td className="py-6 px-1 ">$15.99</td>
            <td className="py-6 px-1 hidden md:block">Burger, Fries</td>
            <td className="py-6 px-1">On the way (approx, 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
