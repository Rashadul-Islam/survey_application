import {View, StatusBar, Image} from 'react-native';
import React, {useState} from 'react';
import MenuDrawer from 'react-native-side-drawer';
import {drawerStyles} from '../utils/drawerStyle';
import Sidebar from '../components/screenComponents/sidebar/Sidebar';
import PressableComponent from '../components/ui/PressableComponent';
import {Bars3Icon} from 'react-native-heroicons/solid';
import TextComponent from '../components/ui/TextComponent';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <View className="h-screen w-screen flex-1 bg-slate-200">
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View className="flex-1 mt-[65px]">
        <MenuDrawer
          open={open}
          position={'left'}
          drawerContent={<Sidebar setOpen={setOpen} />}
          drawerPercentage={70}
          animationTime={250}
          overlay={true}
          style={drawerStyles}
          opacity={0.4}>
          <View className="w-[85%] mx-auto">
            <PressableComponent
              handlePress={() => setOpen(true)}
              icon={<Bars3Icon size={25} color="black" />}
            />
            <View className="h-screen flex flex-col items-center justify-center">
              <TextComponent
                content="Survey Application"
                style="text-[25px] text-black font-thin"
              />
              <Image
                source={require('../assets/homepage.png')}
                className="w-[300px] h-[500px]"
              />
            </View>
          </View>
        </MenuDrawer>
      </View>
    </View>
  );
};

export default Home;
