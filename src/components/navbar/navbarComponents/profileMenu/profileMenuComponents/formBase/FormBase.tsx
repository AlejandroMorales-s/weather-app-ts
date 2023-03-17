//* Formik
import { Formik, Form, FormikHelpers } from "formik";

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
            <button
              type="submit"
              className={`${isSubmitting && "button-disabled"} form-button`}
              disabled={isSubmitting}
            >
              {buttonText}
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}
