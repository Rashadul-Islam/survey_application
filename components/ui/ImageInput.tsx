import {Image, View} from 'react-native';
import React from 'react';
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {launchCamera} from 'react-native-image-picker';
import TextComponent from './TextComponent';
import PressableComponent from './PressableComponent';
import {ImageUploadType} from '../types/uiTypes';
import {XCircleIcon} from 'react-native-heroicons/solid';

const ImageInput: React.FC<ImageUploadType> = ({
  dispatch,
  name,
  defaultImage,
  content,
  preview,
  errorData,
}) => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  const openImagePicker = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0];
        imageUri &&
          dispatch({
            type: 'INPUT',
            payload: {name: name, value: imageUri},
          });
      }
    });
  };

  const handleCameraLaunch = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.assets?.[0];
        imageUri &&
          dispatch({
            type: 'INPUT',
            payload: {name: name, value: imageUri},
          });
      }
    });
  };

  const handleClick = () => {
    dispatch({
      type: 'INPUT',
      payload: {name: name, value: null},
    });
  };

  return (
    <View>
      <TextComponent content={content} style="text-[18px] text-black mb-3" />
      {errorData && !preview && !defaultImage?.uri && (
        <TextComponent
          content={'Required field *'}
          style="text-red-900 text-[14px] mb-5"
        />
      )}
      {defaultImage ? (
        <View className="flex justify-center relative">
          {!preview && (
            <PressableComponent
              handlePress={handleClick}
              style="absolute -top-[5px] right-[42px] z-20 border rounded-full bg-black"
              icon={<XCircleIcon size={30} color="white" />}
            />
          )}
          <Image
            source={{uri: defaultImage?.uri}}
            className="h-[300px] w-full mt-2"
            resizeMode="contain"
          />
        </View>
      ) : preview ? (
        <TextComponent
          content="No image uploaded !"
          style="text-[18px] text-black"
        />
      ) : (
        <View className="flex flex-row justify-between">
          <PressableComponent
            handlePress={openImagePicker}
            style="bg-blue-500 px-5 py-2 rounded-md"
            innerStyle="text-[16px] text-white font-semi-bold"
            content="Open Gallery"
          />
          <PressableComponent
            handlePress={handleCameraLaunch}
            style="bg-blue-500 px-5 py-2 rounded-md"
            innerStyle="text-[16px] text-white font-semi-bold"
            content="Open Camera"
          />
        </View>
      )}
    </View>
  );
};

export default ImageInput;
