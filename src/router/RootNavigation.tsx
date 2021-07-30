import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {STRINGS} from '@assets/strings';
import {HomeScreen, Splash} from '~/screens';
import {useRecoilValue} from 'recoil';
import {isAppInitializedState} from '~/recoil/userInitState';

export const RootNavigation: React.FC = () => {
  const isInit = useRecoilValue(isAppInitializedState);
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isInit ? (
          <Stack.Screen
            name={STRINGS.NAVIGATION.SPLASH}
            component={Splash}
            options={{header: () => null}}
          />
        ) : (
          <React.Fragment>
            <Stack.Screen
              name={STRINGS.NAVIGATION.HOME}
              component={HomeScreen}
              options={{header: () => null}}
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
