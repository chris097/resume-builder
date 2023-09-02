import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../validator";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { ROUTE_URL } from "../../routes/url";
import { Link, useNavigate } from "react-router-dom";
import Input from "../input";
import Button from "../Button";
import HidePassword from "../../public/svgs/HidePassword";
import ShowPassword from "../../public/svgs/ShowPassword";
import { setAuthUser } from "../../helpers/api";

interface FormikProps {
  email: string;
  password: string;
}

const LoginUser = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues: FormikProps = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const responses = await login(values);
      if (responses.status === 400) {
        toast.error(responses.message);
        setIsLoading(false);
      } else if (responses.status === 201 && responses.data.isVerified === false) {
        toast.error("Account not verified!");
        setIsLoading(false);
      } else {
        setAuthUser(responses.data.token);
        toast.success(responses.message);
        setIsLoading(false);
        navigate(ROUTE_URL.RESUME_URL);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="w-[100%] mt-[55px]">
        <div>
          <Input
            container="w-[81%]"
            label="Email address"
            labelStyle="text-coregray text-base font-normal"
            handleClick=""
            icon=""
            inputContainer="w-full h-[56px] flex items-center rounded-[8px] border border-[#CED4DA] px-3 mt-1"
            inputStyle="w-full h-full focus:outline-none text-basegray text-sm"
            input={{
              type: "email",
              placeholder: "Johndoe@gmail.com",
              ...formik.getFieldProps("email"),
            }}
          />
          <p className="text-xs text-corered mt-1 font-opensans">{formik.errors.email && formik.touched.email ? formik.errors.email : null}</p>
        </div>
        <div className="mt-5">
          <Input
            container="w-[81%]"
            label="Password"
            labelStyle="text-coregray text-base font-normal"
            handleClick={() => setShowPassword(!showPassword)}
            icon={showPassword ? <HidePassword /> : <ShowPassword />}
            inputContainer="w-full h-[56px] flex items-center rounded-[8px] border border-[#CED4DA] px-3 mt-1"
            inputStyle="w-full h-full focus:outline-none text-basegray text-sm"
            input={{
              type: showPassword ? "text" : "password",
              placeholder: "******",
              ...formik.getFieldProps("password"),
            }}
          />
          <p className="text-xs text-corered mt-1 font-opensans">{formik.errors.password && formik.touched.password ? formik.errors.password : null}</p>
        </div>
        <Link to={ROUTE_URL.FORGOT_PASSWORD}>
          {" "}
          <div className="text-[#0073E6] mt-4 text-[16px] w-[81%] font-opensans font-normal flex justify-end ">Forgot password?</div>
        </Link>
        <div className="mt-10">
          <Button height="h-12" width="w-[81%]" bg="bg-corered" name={isLoading ? "Loading..." : "Login"} color="text-white" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
