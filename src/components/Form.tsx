import React from "react";
import { Form, Formik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { LoginSchemaValidation } from "../helpers/validation";
import { negativeToast, positiveToast } from "../helpers/toaster";
import { StyledInput } from "./StyledInput";
import { PrimaryBtn } from "./PrimaryBtn";


export const FormExample = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchemaValidation}
      onSubmit={(values, actions) => {
        try {
          setTimeout(() => {
            positiveToast({
              title: "Login successful",
              description: `Welcome back ${values.email}`,
            });
            actions.setSubmitting(false);
          }, 2000);
        } catch (error) {
          negativeToast({ title: "Login fail", description: error })
        }
      }}
    >
      {(formik: any) => (
        <Form>
          <FormControl
            mb="2em"
            isRequired
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel htmlFor="email">Email</FormLabel>
            <StyledInput placeholder="Enter your email" name="email" />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <StyledInput
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          
          <PrimaryBtn
            mt={10}
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Submit
          </PrimaryBtn>
        </Form>
      )}
    </Formik>
  );
};
