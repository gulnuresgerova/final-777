import { useFormik } from "formik";
import Link from "next/link";

import { useRouter } from "next/router";
import { loginSchema } from "../../../schema/login";
import Title from "../../../components/ui/Title";
import Input from "../../../components/form/input";

import { useSession, signIn, getSession } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
  
      push("/profile");
    } catch (err) {
      console.log(err);
    }
  };


  console.log(session);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className=" h-screen   mx-auto  w-full md:w-auto ">
      <div className="container mx-auto font-dancing">
        <form
          className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
          onSubmit={handleSubmit}
        >
          <Title addClass="text-[40px] font-dancing mb-6">Login</Title>
          <div className="flex flex-col gap-y-3 w-full">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <div className="flex flex-col w-full gap-y-3 mt-6">
            <button className="btn-primary p-3 bg-primary" type="submit">
              LOGIN
            </button>
            <button
              className="btn-primary p-3 !bg-secondary text-white"
              type="button"
              onClick={() => signIn("github")}
            >
              GITHUB
            </button>
            <Link href="/auth/register">
              <span className="text-sm underline cursor-pointer text-secondary">
                Do you no have a account?
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
