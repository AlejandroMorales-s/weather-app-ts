//* Formik
import { Formik, Form, FormikHelpers } from "formik";
import PrimaryButton from "../primaryButton/PrimaryButton";

type PropTypes = {
  children: JSX.Element[];
  initialValues: {
    name?: string;
    email: string;
    password: string;
  };
  onSubmit: (
    values: {
      name?: string;
      email: string;
      password: string;
    },
    formikHelpers: FormikHelpers<{
      name?: string;
      email: string;
      password: string;
    }>
  ) => void;
  buttonText: string;
};

export default function CustomForm({
  children,
  initialValues,
  onSubmit,
  buttonText,
}: PropTypes) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <>
          <Form className="form">
            {children}
            <PrimaryButton
              text={buttonText}
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        </>
      )}
    </Formik>
  );
}
