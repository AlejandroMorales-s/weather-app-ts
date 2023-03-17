import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../../../../app/store";
import { loginWithEmail } from "../../../../../features/userAuth";
import FormBase from "./formBase/FormBase";
import Input from "./formBase/Input";

type Values = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    { email, password }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(loginWithEmail({ email, password })).then(() =>
      setSubmitting(false)
    );
  };
  return (
    <div role="form">
      <FormBase
        onSubmit={handleSubmit}
        buttonText="Iniciar sesión"
        initialValues={{ email: "", password: "" }}
      >
        <Input
          className=""
          label="Email"
          name="email"
          placeholder="example@example.com"
          type="email"
        />
        <Input
          className=""
          label="Contraseña"
          name="password"
          placeholder="*******"
          type="password"
        />
      </FormBase>
    </div>
  );
}
