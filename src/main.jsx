import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./index.css";

import Home from "./pages/Home";
import Programs from "./pages/Programs";

const httpLink = createHttpLink({
  uri: "https://eu-central-1.cdn.hygraph.com/content/cko4j7ro2ig7j01yz5tfzd0fi/master",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODIzMzQxODEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2tvNGo3cm8yaWc3ajAxeXo1dGZ6ZDBmaS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDM4YTNkOTktMDk2Mi00YjA4LTg4N2QtZWM2Yjg5NWY3YWJlIiwianRpIjoiY2xndXFjMjdjMGE1djAxdWtjZmQwNm8ybiJ9.DYBPkdbpP_zg5ARz2ogXksL8VwSuyoj1aDFK4QNviuIwuUrRxUKwc-y6yszaMQL56RqSrjL8x081aRaVNrYQc6Ppzuf0u6JZ8RoD2xePaQsnIQnfEf27zd8DlXZn_p-L8Us8xBt3zmquoiOaBy5vtvYcSvwWsJU08wN3UFGTl1Scxqk8WtkuBnRnSkr-lnKcqJkj02NuqUCGkg6f2wJqL93sEco4gZ7WDIXlKPxbxaw5jyE45gcvYKP4rjXsPndDS2BRR3tTZ_WOFr59DGtHKiazK_n5HNgRgQe-nE7KFnOQ9N5DffmmlA3Wg8wJHTuaagTqSo5t1rl0fQaHLOgFsbQzHj91-_MNwia_4rljWmO2d-uKiAhvhbGnDfpz8svwJ6Y1FRqOu3qKrnfT-W2RPBtXJJ_gY7yIhBpSu3X5M3TvuqcMNrQ0jB-nWvGolTP6Bc36ZX75eE57d_AgIWTIYSuFQDMoLWopgO7_-LwO8-oERcXgK-2cw7m1WsHTgHZGJjBrkvM_ZnbgdJlgKoXWAzmkklSn6lGEu7darnB7HaleAllkfXMtq_k9Jv9WK7uFVenDJWdn-yz3NbgbG7VuYrC6IHoFWnh9qJu5efuUVfSdNp60_rqPfJvtydzMdkjQBacp8ekw-MtgD9q7tpffX2HViSD7j-ABVAN0Ud4ddjU";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
