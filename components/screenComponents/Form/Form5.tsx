import {View} from 'react-native';
import React from 'react';
import ImageInput from '../../ui/ImageInput';
import {FormType} from '../../types/screenComponentsType';
import MultipleImageInput from '../../ui/MultipleImageInput';

const Form5: React.FC<FormType> = ({state, dispatch, preview}) => {
  return (
    <View className="w-[85%] mx-auto">
      <View className="w-full mt-5 mb-3">
        <ImageInput
          defaultImage={state.shopPic}
          name="shopPic"
          dispatch={dispatch}
          content="Shop image"
          preview={preview}
        />
      </View>
      <View className="w-full mt-5 mb-3">
        <ImageInput
          content="BIN certificate image"
          defaultImage={state.binCertificate}
          name="binCertificate"
          dispatch={dispatch}
          preview={preview}
        />
      </View>
      <View className="w-full mt-5 mb-3">
        <MultipleImageInput
          content="Items images"
          defaultImage={state.itemList}
          name="itemList"
          dispatch={dispatch}
          preview={preview}
        />
      </View>
    </View>
  );
};

export default Form5;
