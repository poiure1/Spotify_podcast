import { createBrowserRouter, RouterProvider} from "react-router-dom";
import PodcastEpisodePage from "./pages/PodcastEpisodePage.jsx"
import PodcastShowPage from "./pages/PodcastShowPage.jsx";
import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PodcastShowPage/>
  },
  {
    path: "/podcastshow",
    element: <PodcastShowPage/>
  },
  {
    path: "/podcastshow/:podcastShowId",
    element: <PodcastShowPage/>
  },
  {
    path: "/podcastepisode",
    element: <PodcastEpisodePage/>
  },
  {
    path: "/podcastepisode/:podcastEpisodeId",
    element: <PodcastEpisodePage/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);