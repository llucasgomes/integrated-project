import { ErrorMessage, Field } from "formik";
import {
  Container,
  ErrorStyled,
  FieldStyled,
  Label,
  RequiredLabel,
} from "./styled";

export const Input_image = ({
  name,
  type = "",
  label,
  required,
  dataList,
  ...props
}) => {
  return (
    <Container size={name}>
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} type={type} list={label} {...props} />
      {label == "Job" ? (
        <datalist id={label}>
          {dataList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </datalist>
      ) : null}
      <ErrorMessage name={name} component={ErrorStyled} />
    </Container>
  );
};
