import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const PersonalInfoPage = lazy(() =>
  import("./personal-info").then(({ PersonalInfoPage }) => ({
    default: PersonalInfoPage,
  }))
);

const UserFormPage = lazy(() =>
  import("./user-form").then(({ UserFormPage }) => ({ default: UserFormPage }))
);

const ErrorPage = lazy(() =>
  import("./error-page").then(({ ErrorPage }) => ({ default: ErrorPage }))
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInfoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-form",
    element: <UserFormPage />,
  },
]);
