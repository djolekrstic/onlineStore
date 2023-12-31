import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Landing,
  Login,
  Register,
  HomeLayout,
  Cart,
  Checkout,
  SingleProduct,
  Products,
  ProductsLiked,
  Account,
  Error,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import Loader from "./loader/Loader";
import { useSelector } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    loader: Loader(queryClient),
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: Loader(queryClient),
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: Loader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: Loader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "liked",
        element: <ProductsLiked />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
