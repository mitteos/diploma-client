import styled from "styled-components"
import React, {ChangeEvent, useState} from "react"
import {FieldError, FieldValues, Path, UseFormGetValues, UseFormRegister} from "react-hook-form"
import {PatternState} from "@/utils/patternsCollection";

interface InputProps<T extends FieldValues> {
  type?: string;
  required?: boolean;
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldError | undefined;
  minLength?: number;
  maxLength?: number;
  pattern?: PatternState;
  isDisabled?: boolean;
  className?: string;
  getValues:  UseFormGetValues<T>
}
interface Option {
  value: number;
  message: string;
}
interface RegisterOptions {
  required: string | boolean;
  minLength: 0 | Option | undefined;
  maxLength: 0 | Option | undefined;
  pattern: PatternState | undefined;
  onBlur: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = <T extends FieldValues>({getValues, className, isDisabled ,pattern, minLength, maxLength, type = "text", placeholder, register, name, errors, required = false}: InputProps<T>) => {


  const [isFocus, setIsFocus] = useState(false)
  const [value, setValue] = useState<string>(getValues(name));

  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleOut = () => {
    setIsFocus(false)
  }

  const registerOptions: RegisterOptions = {
    required: required && "Не может быть пустым",
    minLength: minLength && {
      value: minLength,
      message: `Минимум ${minLength} символов`
    },
    maxLength: maxLength && {
      value: maxLength,
      message: `Максимум ${maxLength} символов`
    },
    pattern,
    onBlur: handleOut,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }

  return (
      <Container className={className}>
        <Label>
          <InputInner
              type={type}
              $errors={errors}
              onFocus={handleFocus}
              disabled={isDisabled}
              $isFocus={isFocus || !!value}
              {...register(name, registerOptions)}
          />
          <Placeholder $isFocus={isFocus || !!value}>{placeholder}</Placeholder>
        </Label>
        {!isDisabled && <ErrorText>{errors?.message}</ErrorText>}
      </Container>
  )
}

const Container = styled.div`
  background: #FFFFFF;
  border-radius: 17px;
  position: relative;
  height: 43px;
`
const Label = styled.label`
  width: 100%;
`
const InputInner = styled.input<{$errors: FieldError | undefined; $isFocus: boolean}>`
  width: 100%;
  height: 100%;
  background: none;
  font-size: 14px;
  border-radius: 17px;
  border: 1px solid ${({$errors}) => $errors ? "#f65f5f" : "#fff"};
  transition: all .3s ease;
  padding: 13px 22px 4px 22px;
  opacity: ${({$isFocus}) => $isFocus ? 1 : 0};
  &:focus {
    outline: none;
  }
`
const Placeholder = styled.p<{$isFocus: boolean}>`
  user-select: none;
  cursor: text;
  position: absolute;
  left: 22px;
  transform-origin: left;
  top: 50%;
  transform: ${({$isFocus}) => $isFocus ? "translateY(-110%) scale(0.75)" : "translateY(-50%)"};
  transition: all .3s ease;
`
const ErrorText = styled.p`
  position: absolute;
  left: 0;
  bottom: -18px;
  color: #f65f5f;
  font-size: 12px;
`
