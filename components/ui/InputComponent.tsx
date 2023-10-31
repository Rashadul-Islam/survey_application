import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {InputTextProp} from '../types/uiTypes';
import TextComponent from './TextComponent';
import {
  alphanumericAndSymbol,
  numericRegex,
  numericSymbol,
} from '../../sampleData/regexdata';

const InputComponent: React.FC<InputTextProp> = ({
  placeholder,
  style,
  handleChange,
  secure,
  name,
  defaultValue,
  handleInputChange,
  preview,
  type,
}) => {
  const [error, seterror] = useState<string>('');

  const handleInput = (e: string, fieldName: string) => {
    switch (type) {
      case 'numericSymbol': {
        if (e !== '' && !numericSymbol.test(e)) {
          return seterror('Only accept neumeric and symbol');
        } else {
          seterror('');
          return (
            handleChange &&
            handleChange({
              type: 'INPUT',
              payload: {name: fieldName, value: e},
            })
          );
        }
      }
      case 'alphanumericAndSymbol': {
        if (e !== '' && !alphanumericAndSymbol.test(e)) {
          return seterror('Only accept alpha neumeric symbol');
        } else {
          seterror('');
          return (
            handleChange &&
            handleChange({
              type: 'INPUT',
              payload: {name: fieldName, value: e},
            })
          );
        }
      }
      case 'numeric': {
        if (e !== '' && !numericRegex.test(e)) {
          return seterror('Only accept neumeric symbol');
        } else {
          seterror('');
          return (
            handleChange &&
            handleChange({
              type: 'INPUT',
              payload: {name: fieldName, value: e},
            })
          );
        }
      }
      default:
        return (
          handleChange &&
          handleChange({
            type: 'INPUT',
            payload: {name: fieldName, value: e},
          })
        );
    }
  };

  return (
    <View>
      {preview ? (
        defaultValue !== '' && (
          <TextComponent
            style="text-black text-[18px] mt-3 border-b pb-2"
            content={defaultValue}
          />
        )
      ) : (
        <View>
          <View>
            {error && !preview && (
              <TextComponent
                content={error}
                style="text-red-900 text-[14px] mt-2"
              />
            )}
          </View>
          <TextInput
            style={{fontFamily: 'InriaSerif-Regular'}}
            placeholder={placeholder}
            placeholderTextColor="black"
            className={style}
            secureTextEntry={secure}
            value={defaultValue}
            onChangeText={e =>
              name
                ? handleInput(e, name)
                : handleInputChange && handleInputChange(e)
            }
          />
        </View>
      )}
    </View>
  );
};

export default InputComponent;
