import {Image, KeyboardAvoidingView, StatusBar, View} from 'react-native';
import React, {useState} from 'react';
import {
  ArrowRightOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon,
} from 'react-native-heroicons/solid';
import CheckBox from '@react-native-community/checkbox';
import TextComponent from '../components/ui/TextComponent';
import PressableComponent from '../components/ui/PressableComponent';
import TouchableOpacityComponent from '../components/ui/TouchableOpacityComponent';
import InputComponent from '../components/ui/InputComponent';

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selected, setSelected] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <View className="flex-1 relative">
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        className="bg-[#D9D9D9] w-[200px] h-[200px] absolute -top-7 -left-10 shadow-md rounded-full z-10"
        style={{
          shadowColor: '#000',
        }}
      />
      <View
        style={{
          shadowColor: '#000',
        }}
        className="bg-[#146C94] shadow-lg w-[220px] h-[150px] absolute -top-8 -left-2 rounded-full rotate-6 z-20"
      />
      <View
        style={{
          shadowColor: '#000',
        }}
        className="bg-[#D9D9D9] shadow-lg w-[370px] h-[180px] absolute -top-12 left-12 rounded-full rotate-6 z-30"
      />
      <TextComponent
        style="text-[#000000] text-center top-11 font-semibold text-[50px] z-40"
        content="Login"
      />
      <KeyboardAvoidingView behavior="padding" className="flex-1 relative">
        <View
          style={{
            shadowColor: '#000',
          }}
          className="w-full min-h-screen absolute top-[45%] bg-[#D9D9D9] shadow-md rounded-[50px]">
          <Image
            source={require('../assets/loginpage.png')}
            className="w-[200px] h-[200px] -top-[145px] mx-auto z-0"
          />
          <InputComponent
            style="border-b w-[85%] mx-auto -top-28 placeholder:text-[18px] text-[#514A4A]"
            placeholder="Email"
            handleInputChange={setEmail}
          />
          <View className="relative">
            <InputComponent
              style="border-b w-[85%] mx-auto -top-20 placeholder:text-[18px] text-[#514A4A]"
              placeholder="Password"
              secure={showPassword}
              handleInputChange={setPassword}
            />
            <PressableComponent
              style="absolute right-9 -top-[60px]"
              handlePress={togglePassword}
              icon={
                showPassword ? (
                  <EyeIcon size={20} color={'black'} />
                ) : (
                  <EyeSlashIcon size={20} color={'black'} />
                )
              }
            />
          </View>
          <View className="flex flex-row justify-between w-[85%] mx-auto -top-12">
            <View className="flex h-[25px] flex-row items-center relative -left-1.5">
              <CheckBox value={selected} onValueChange={setSelected} />
              <TextComponent content="Remember me" style="text-[18px]" />
            </View>
            <PressableComponent
              handlePress={() => {
                console.log('forgot');
              }}
              style="h-[25px] flex items-center"
              content="Forgot Password?"
              innerStyle="text-[18px] text-[#202660]"
            />
          </View>
          <View className="h-[50px] w-full flex items-center justify-center">
            <TouchableOpacityComponent
              handlePress={handleLogin}
              style="bg-[#146C94] h-[50px] w-[85%] flex flex-row justify-center items-center rounded-full"
              innerStyle="text-white text-[18px] mx-1"
              content="Login"
              icon={<ArrowRightOnRectangleIcon size={20} color={'white'} />}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
