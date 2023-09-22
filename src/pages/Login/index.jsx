import { useSelector } from "react-redux";
import LeftSide from "./LeftSide";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const authentication = useSelector((state) => state.authentication);

  if (authentication.isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <section className="flex sm:block items-center flex-col min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="overflow-hidden bg-white rounded-md shadow-lg max grid grid-cols-2 sm:block gap-2">
        <LeftSide />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
