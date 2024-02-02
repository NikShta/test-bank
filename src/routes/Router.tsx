import {type FC} from "react";
import {Route, Routes} from "react-router-dom";

import Main from "@pages/Main/Main";
import PageNotFound from "@pages/PageNotFound/PageNotFound";

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
