import {Image, KeyboardAvoidingView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ArrowRightOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon,
} from 'react-native-heroicons/solid';
import TextComponent from '../components/ui/TextComponent';
import PressableComponent from '../components/ui/PressableComponent';
import TouchableOpacityComponent from '../components/ui/TouchableOpacityComponent';
import InputComponent from '../components/ui/InputComponent';
import {digituptoSix, emailExactRegex} from '../sampleData/regexdata';
import {API} from '../utils/endpoint';
import axios from 'axios';
import {storeData} from '../utils/asyncStorage';
import {ScreenType} from '../components/types/screenComponentsType';
import {useToast} from 'react-native-toast-notifications';

const Login: React.FC<ScreenType> = ({setUser}) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validationError, setValidationError] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });
  const toast = useToast();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const request = async () => {
    const {data} = await axios.post(
      API + '/auth-login',
      {
        email: email,
        password: password,
        login_mode: 'app login',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (data.access_token) {
      storeData(data);
      setUser(data);
    }
    if (data.message) {
      toast.show(data.message, {
        type: 'custom_error',
      });
    }
  };

  const handleLogin = () => {
    if (email === '') {
      setValidationError(prevError => ({
        ...prevError,
        email: 'Required field*',
      }));
    }
    if (email !== '' && !emailExactRegex.test(email)) {
      setValidationError(prevError => ({
        ...prevError,
        email: 'Invalid email*',
      }));
    }
    if (password === '') {
      setValidationError(prevError => ({
        ...prevError,
        password: 'Required field*',
      }));
    }
    if (password !== '' && !digituptoSix.test(password)) {
      setValidationError(prevError => ({
        ...prevError,
        password: 'Password must 6 digit number',
      }));
    }
    if (
      validationError.email === '' &&
      validationError.password === '' &&
      email !== '' &&
      password !== ''
    ) {
      request();
    }
  };

  useEffect(() => {
    if (email) {
      setValidationError(prevError => ({
        ...prevError,
        email: '',
      }));
    }
    if (password) {
      setValidationError(prevError => ({
        ...prevError,
        password: '',
      }));
    }
  }, [email, password]);

  return (
    <View className="flex-1 relative">
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
          className="w-full min-h-screen absolute top-[40%] bg-[#D9D9D9] shadow-md rounded-[50px]">
          <Image
            source={require('../assets/loginpage.png')}
            className="w-[200px] h-[200px] -top-[145px] mx-auto z-0"
          />
          <View className="w-[85%] mx-auto -top-[12%]">
            <TextComponent
              style="text-red text-[16px]"
              content={validationError.email}
            />
            <InputComponent
              style="border-b placeholder:text-[18px] text-[#514A4A]"
              placeholder="Email"
              handleInputChange={setEmail}
            />
            <TextComponent
              style="text-red text-[16px] mt-5"
              content={validationError.password}
            />
            <View className="relative">
              <InputComponent
                style="border-b placeholder:text-[18px] text-[#514A4A]"
                placeholder="Password"
                secure={showPassword}
                handleInputChange={setPassword}
                keyboardType="number-pad"
              />
              <PressableComponent
                style="absolute right-3 top-[35%]"
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
            {/* <View className="flex flex-row justify-between mt-10">
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
            </View> */}
            <TouchableOpacityComponent
              handlePress={handleLogin}
              style="bg-[#146C94] h-[50px] flex flex-row justify-center items-center rounded-full mt-10"
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
