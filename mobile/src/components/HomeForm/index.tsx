import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';

import { SubmitButton, SubmitButtonText } from './styles';
import { LoginData, RegisterData } from '../../interfaces/IUserInfo';

interface HomeFormProps {
  submitButtonText: string;
  // eslint-disable-next-line no-unused-vars
  handleSubmit(data: LoginData | RegisterData): void;
}

// children must contain at least one SessionInput component
const HomeForm: React.FC<HomeFormProps> = ({
  children,
  submitButtonText,
  handleSubmit,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler<LoginData | RegisterData> = useCallback(
    data => {
      handleSubmit(data);
    },
    [handleSubmit],
  );

  return (
    <>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        {children}
        <SubmitButton onPress={() => formRef.current?.submitForm()}>
          <SubmitButtonText>{submitButtonText}</SubmitButtonText>
        </SubmitButton>
      </Form>
    </>
  );
};

export default HomeForm;
