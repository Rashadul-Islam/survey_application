import {View, Pressable} from 'react-native';
import React from 'react';
import {
  ArrowRightOnRectangleIcon,
  HomeIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
  XMarkIcon,
} from 'react-native-heroicons/solid';
import TextComponent from '../../ui/TextComponent';
import {useNavigation} from '@react-navigation/native';
import {RootParamList} from '../../../utils/navigationtype';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Navigattiontype = NativeStackNavigationProp<
  RootParamList,
  'home' | 'form' | 'profile'
>;
interface SidebarType {
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarType> = ({setOpen}) => {
  const navigation = useNavigation<Navigattiontype>();
  return (
    <View className="bg-gray-600 flex-1 relative">
      <Pressable
        onPress={() => setOpen(false)}
        className="absolute right-3 top-3">
        <XMarkIcon size={30} color="white" />
      </Pressable>
      <View className="mt-32 ml-8">
        <Pressable
          onPress={() => navigation.replace('home')}
          className="flex flex-row items-center mb-8">
          <HomeIcon size={25} color="white" />
          <TextComponent
            content="Home"
            style="text-[18px] font-thin text-white ml-3"
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.replace('form')}
          className="flex flex-row items-center mb-8">
          <Square3Stack3DIcon size={25} color="white" />
          <TextComponent
            content="Survey form"
            style="text-[18px] font-thin text-white ml-3"
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.replace('profile')}
          className="flex flex-row items-center mb-8">
          <UserCircleIcon size={25} color="white" />
          <TextComponent
            content="Profile"
            style="text-[18px] font-thin text-white ml-3"
          />
        </Pressable>
        <Pressable className="flex flex-row items-center mb-8">
          <ArrowRightOnRectangleIcon size={25} color="white" />
          <TextComponent
            content="Logout"
            style="text-[18px] font-thin text-white ml-3"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Sidebar;
