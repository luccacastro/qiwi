import { createBottomTabNavigator } from 'react-navigation';

import Scan from '../Tabs/Scan';
import Maps from '../Tabs/Maps';
import Home from '../Tabs/Home';
import List from '../Tabs/List';
import Cart from '../Tabs/Cart';

var myTabs = createBottomTabNavigator ({
    Home: {
        screen: Home
    },
    Maps: {
        screen: Maps 
    },
    Scan: {
        screen: Scan
    },
    List: {
        screen: List 
    },
    Cart: {
        screen: Cart
    }
}
);

export default myTabs;
