type RouteProps = {
  HOME_URL: string;
  NOT_FOUND: string;
  RESUME_URL: string;
  VERIFY_OTP_URL: (e: string) => string;
  LOGIN_URL: string;
  REGISTER_URL: string;
  PROFESSION_SUMMARY_URL: string;
  WORK_HISTORY_URL: string;
  EDUCATION_URL: string;
  TECHNICAL_SKILL_URL: string;
  FORGOT_PASSWORD: string;
  VERIFICATION: string;
  CREATE_PASSWORD: string;
};

export const ROUTE_URL: RouteProps = {
  HOME_URL: "/",
  NOT_FOUND: "*",
  LOGIN_URL: "/login",
  REGISTER_URL: "/register",
  VERIFY_OTP_URL: (email) => `/verify-otp/${email}`,
  FORGOT_PASSWORD: "/forgot-password",
  RESUME_URL: "/resume",
  PROFESSION_SUMMARY_URL: "/resume/summary",
  WORK_HISTORY_URL: "/resume/history",
  EDUCATION_URL: "/resume/education",
  TECHNICAL_SKILL_URL: "/resume/skill",
  VERIFICATION: "/verification",
  CREATE_PASSWORD: "/create-password",
};
