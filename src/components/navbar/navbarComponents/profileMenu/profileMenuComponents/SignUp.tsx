import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../../../../app/store";
import { createAccountWithEmail } from "../../../../../features/userAuth";
import FormBase from "./formBase/FormBase";
import Input from "./formBase/Input";

type Values = {
  name?: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    { name, email, password }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(
      createAccountWithEmail({ email, password, name: name as string })
    ).then(() => setSubmitting(false));
  };
  return (
    <div role="form">
      <FormBase
        onSubmit={handleSubmit}
        buttonText="Crear cuenta"
        initialValues={{ name: "", email: "", password: "" }}
      >
        <Input
          className=""
          label="Nombre"
          name="name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          className=""
          label="Email"
          name="email"
          placeholder="example@example.com"
          type="email"
        />
        <Input
          className=""
          label="Crea una nueva contraseña"
          name="password"
          placeholder="*******"
          type="password"
        />
      </FormBase>
    </div>
  );
}
