import {View, StatusBar, Alert} from 'react-native';
import React, {useReducer, useState} from 'react';
import TextComponent from '../components/ui/TextComponent';
import {initialState} from '../states/initialState';
import {reducer} from '../states/formReducer';
import Form1 from '../components/screenComponents/Form/Form1';
import Form2 from '../components/screenComponents/Form/Form2';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Form3 from '../components/screenComponents/Form/Form3';
import Form4 from '../components/screenComponents/Form/Form4';
import Form5 from '../components/screenComponents/Form/Form5';
import PressableComponent from '../components/ui/PressableComponent';
import {Bars3Icon, PencilSquareIcon} from 'react-native-heroicons/solid';
import {validation} from '../utils/formValidation';
import MenuDrawer from 'react-native-side-drawer';
import Sidebar from '../components/screenComponents/sidebar/Sidebar';
import {drawerStyles} from '../utils/drawerStyle';

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [preview, setPreview] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = () => {
    const check = validation(state);
    if (check) {
      setPreview(true);
    } else {
      Alert.alert(
        'Validation failed!',
        'Please fill up all input fields',
        [{text: 'OK'}],
        {
          cancelable: false,
        },
      );
    }
  };

  return (
    <View className="h-screen w-screen flex-1 bg-slate-200">
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View className="mt-[65px] flex-1">
        <MenuDrawer
          open={open}
          position={'left'}
          drawerContent={<Sidebar setOpen={setOpen} />}
          drawerPercentage={70}
          animationTime={250}
          overlay={true}
          style={drawerStyles}
          opacity={0.4}>
          {preview ? (
            <View className="flex flex-row justify-between items-center mb-5 w-[85%] mx-auto">
              <PressableComponent
                icon={<Bars3Icon size={25} color="black" />}
                handlePress={() => setOpen(true)}
              />
              <TextComponent
                content="Check the form carefully"
                style="text-[22px] text-center text-black font-semi-bold"
              />
              <PressableComponent
                icon={<PencilSquareIcon size={25} color="black" />}
                handlePress={() => setPreview(false)}
              />
            </View>
          ) : (
            <View className="flex flex-row items-center mb-5 w-[85%] mx-auto">
              <PressableComponent
                icon={<Bars3Icon size={25} color="black" />}
                handlePress={() => setOpen(true)}
              />
              <TextComponent
                content="Fill up the form carefully"
                style="text-[22px] text-center text-black font-semi-bold ml-5"
              />
            </View>
          )}
          <KeyboardAwareScrollView>
            <Form1 state={state} dispatch={dispatch} preview={preview} />
            <Form2 state={state} dispatch={dispatch} preview={preview} />
            <Form3 state={state} dispatch={dispatch} preview={preview} />
            <Form4 state={state} dispatch={dispatch} preview={preview} />
            <Form5 state={state} dispatch={dispatch} preview={preview} />
            <View className="w-[85%] mx-auto mb-10 mt-5">
              <PressableComponent
                handlePress={handleSubmit}
                content={preview ? 'Final submit' : 'Submit'}
                style="bg-blue-500 py-2 rounded-md"
                innerStyle="text-center text-[18px] text-white font-bold"
              />
            </View>
          </KeyboardAwareScrollView>
        </MenuDrawer>
      </View>
    </View>
  );
};

export default Form;
