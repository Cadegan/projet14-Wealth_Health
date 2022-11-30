import { Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

const Adress = ({
  control,
  controllerPattern,
  inputPropsPattern,
  minLength,
  maxLength,
  name,
  label,
}) => {
  return (
    <div className={`${name}`}>
      <Controller
        name={`adress.${name}`}
        control={control}
        rules={{
          required: {
            message: "Required",
            value: true,
          },
          pattern: {
            value: controllerPattern,
            message: "Special characters not allowed",
          },
          minLength: {
            value: minLength,
            message: `Please enter at least ${minLength} characters`,
          },
          maxLength: {
            value: maxLength,
            message: `Please enter less than ${maxLength} characters`,
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            required={true}
            value={value}
            id={name}
            label={label}
            onChange={onChange}
            inputProps={{
              pattern: inputPropsPattern,
            }}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </div>
  );
};

export default Adress;