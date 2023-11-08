import {View, Image} from 'react-native';
import React, {useState} from 'react';
import MenuDrawer from 'react-native-side-drawer';
import {drawerStyles} from '../utils/drawerStyle';
import Sidebar from '../components/screenComponents/sidebar/Sidebar';
import PressableComponent from '../components/ui/PressableComponent';
import {Bars3Icon} from 'react-native-heroicons/solid';
import TextComponent from '../components/ui/TextComponent';
import {ScreenType} from '../components/types/screenComponentsType';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home: React.FC<ScreenType> = ({setUser, user}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SafeAreaView className="h-screen w-screen flex-1 bg-slate-200">
      <View>
        <MenuDrawer
          open={open}
          position={'left'}
          drawerContent={
            <Sidebar setOpen={setOpen} user={user} setUser={setUser} />
          }
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
                className="h-[65%] w-full"
              />
            </View>
          </View>
        </MenuDrawer>
      </View>
    </SafeAreaView>
  );
};

export default Home;
