import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../../store";
import { createAccountWithEmail } from "../../../containers/userAuth";
import FormBase from "../form/Form";
import Input from "../input/Input";

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
        <Input label="Nombre" name="name" placeholder="John Doe" type="text" />
        <Input
          label="Email"
          name="email"
          placeholder="example@example.com"
          type="email"
        />
        <Input
          label="Crea una nueva contraseña"
          name="password"
          placeholder="*******"
          type="password"
        />
      </FormBase>
    </div>
  );
}
