import { compose } from "@reduxjs/toolkit";
import { withRouter } from "./with-router";

export const withProviders = compose(withRouter);
