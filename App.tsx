import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Form from './screens/Form';
import Home from './screens/Home';
import {RootParamList} from './utils/navigationtype';
import Profile from './screens/Profile';
import {UserType, getData} from './utils/asyncStorage';
import {StatusBar, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import {ToastProvider} from 'react-native-toast-notifications';
import TextComponent from './components/ui/TextComponent';

const Stack = createNativeStackNavigator<RootParamList>();

export default function App() {
  const [user, setUser] = React.useState<UserType | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const userData = await getData();
      if (userData !== null) {
        setUser(userData);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="w-screen h-screen flex-1 items-center justify-center">
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <Spinner isVisible={loading} size={50} type={'Wave'} color={'gray'} />
      </View>
    );
  }

  return (
    <ToastProvider
      placement="top"
      offsetTop={50}
      renderType={{
        custom_error: toast => (
          <View
            style={{width: 250}}
            className="p-5 bg-white rounded-md border-l-4 border-orange-500">
            <TextComponent
              content={toast.message}
              style="text-[16px] text-red-700 text-center"
            />
          </View>
        ),
        custom_success: toast => (
          <View
            style={{width: 250}}
            className="p-5 bg-white rounded-md border-l-4 border-orange-500">
            <TextComponent
              content={toast.message}
              style="text-[16px] text-green-700 text-center"
            />
          </View>
        ),
      }}>
      <NavigationContainer>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name="home" options={{headerShown: false}}>
                {props => <Home {...props} user={user} setUser={setUser} />}
              </Stack.Screen>
              <Stack.Screen name="form" options={{headerShown: false}}>
                {props => <Form {...props} user={user} setUser={setUser} />}
              </Stack.Screen>
              <Stack.Screen name="profile" options={{headerShown: false}}>
                {props => <Profile {...props} user={user} setUser={setUser} />}
              </Stack.Screen>
            </>
          ) : (
            <Stack.Screen name="login" options={{headerShown: false}}>
              {props => <Login {...props} setUser={setUser} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}
