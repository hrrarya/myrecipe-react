import { useSelector } from "react-redux";
import LeftSide from "./LeftSide";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const authentication = useSelector((state) => state.authentication);

  // useEffect(() => {
  //   alert("Demo Email: hridoy@wpdeveloper.com, password: hridoy");
  // }, []);

  if (authentication.isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <section className="flex items-center flex-col min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="overflow-hidden bg-white rounded-md shadow-lg max grid grid-cols-2 gap-2">
        <LeftSide />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
