import {Navigator} from '../../constants';
import {Screen} from '../../constants';

export type MaterialBottomTabParamList = {
  [Screen.Splash]: {user: string};
  [Screen.Chat]: undefined;
  [Screen.Products]: undefined;
  [Screen.Options]: undefined;
  [Navigator.TopicDrawerNavigator]: undefined;
  Options: undefined;
};
