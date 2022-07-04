import React from "react";

import { Home } from "views";

const routes = [
  {
    path: "/posts",
    renderer: (params = {}) => <Home {...params} />,
  },
];

export default routes;
