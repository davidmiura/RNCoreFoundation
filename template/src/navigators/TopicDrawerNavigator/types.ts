import {Navigator} from '../../constants';
import {Screen} from '../../constants';

export type TopicDrawerStackParamList = {
  [Screen.Splash]: {user: string};
  [Screen.Chat]: undefined;
  [Screen.Products]: undefined;
  [Screen.Options]: undefined;
  [Screen.Registration]: undefined;
  Registration: undefined;
  [Navigator.TopicDrawerNavigator]: undefined;
  Options: undefined;
  Products: undefined;
  Main: undefined;
};
