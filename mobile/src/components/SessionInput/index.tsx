/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { LoginTextInput } from './styles';

interface ISessionInputProps extends TextInputProps {
  name: string;
}

interface ISessionInputRef {
  value: string;
}

const SessionInput: React.FC<ISessionInputProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, defaultValue = '' } = useField(name);
  const inputValueRef = useRef<ISessionInputRef>({ value: '' });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <LoginTextInput
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      onChangeText={value => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  );
};

export default SessionInput;
