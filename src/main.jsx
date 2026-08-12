import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './utils/routes';

const root = document.getElementById("root");
if (root) {
ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
}