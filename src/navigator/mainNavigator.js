import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile206888Navigator from '../features/UserProfile206888/navigator';
import Tutorial206887Navigator from '../features/Tutorial206887/navigator';
import NotificationList206859Navigator from '../features/NotificationList206859/navigator';
import Settings206858Navigator from '../features/Settings206858/navigator';
import Settings206850Navigator from '../features/Settings206850/navigator';
import UserProfile206848Navigator from '../features/UserProfile206848/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile206888: { screen: UserProfile206888Navigator },
Tutorial206887: { screen: Tutorial206887Navigator },
NotificationList206859: { screen: NotificationList206859Navigator },
Settings206858: { screen: Settings206858Navigator },
Settings206850: { screen: Settings206850Navigator },
UserProfile206848: { screen: UserProfile206848Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
