import React from "react";
import { ROUTE_URL } from "./url";
const CreatePassword = React.lazy(() => import("../pages/private/CreatePassword"));
const Verification = React.lazy(() => import("../components/Splash/Verification"));
const ForgotPassword = React.lazy(() => import("../pages/private/ForgotPassword"));
const VerifyOtp = React.lazy(() => import("../pages/private/VerifyOtp"));
const RegisterOrLogin = React.lazy(() => import("../pages/private/RegisterOrLogin"));

type PrivateProps = {
  path: string;
  element: any;
};

export const privateRoutes: PrivateProps[] = [
  {
    path: ROUTE_URL.LOGIN_URL,
    element: RegisterOrLogin,
  },
  {
    path: ROUTE_URL.VERIFY_OTP_URL(":email"),
    element: VerifyOtp,
  },
  {
    path: ROUTE_URL.FORGOT_PASSWORD,
    element: ForgotPassword,
  },
  {
    path: ROUTE_URL.VERIFICATION,
    element: Verification,
  },
  {
    path: ROUTE_URL.CREATE_PASSWORD,
    element: CreatePassword,
  },
];
