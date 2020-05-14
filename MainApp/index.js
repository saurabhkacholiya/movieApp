import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import connect from 'react-redux/es/connect/connect';
import injectSaga from "../utils/injectSaga";
import saga from './saga';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  FontAwesome,
  FontAwesome5
} from 'react-native-vector-icons';
import WishListScreen from "../WishListScreen";
import SearchScreen from "../SearchScreen";
import { COLORS } from "../constant";


const MainStack = createBottomTabNavigator();

function MainApp(){
    return (
      <NavigationContainer>
          <MainStack.Navigator 
            initialRouteName="Search"
            headerMode="screen"
            tabBarOptions={{
              activeTintColor: COLORS.mainThemeColor,
            }}
          >
            <MainStack.Screen 
              name="Search" 
              component={SearchScreen} 
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="search" color={color} size={size} />
                ),
              }}
            />
            <MainStack.Screen 
                name="WishListScreen" 
                component={WishListScreen} 
                options={{
                  headerMode: false,
                  tabBarLabel: 'Wish List',
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="list-alt" color={color} size={size} />
                  ),
                }}
            />
          </MainStack.Navigator>
      </NavigationContainer>
    )
}


const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = {
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withSaga,
  withConnect,
)(MainApp);
