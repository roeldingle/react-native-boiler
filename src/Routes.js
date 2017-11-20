import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Router, Stack, Scene, Actions, Drawer } from 'react-native-router-flux';




/*pages*/
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import PhotosPage from './pages/PhotosPage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';


import Icon from 'react-native-vector-icons/FontAwesome';


//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';
    var icon = this.props.iconName ? this.props.iconName : 'home';
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: '#ffffff'}} name={icon} size={18}/>
      </View>
    );
  }
}



export default class Routes extends Component<{}> {
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: '#c2185b', top:0 }}
        titleStyle={{ color: '#ffffff', width: 200 }}
        >
      	<Stack key="root">
      		<Scene key="login" component={LoginPage} title="LoginPage" hideNavBar={true} initial={true}/>
      		<Scene key="register" component={RegisterPage} title="RegisterPage" hideNavBar={true} />

          <Scene
            key="tabs"
            tabs
            hideNavBar
            tabBarPosition='bottom'
            tabBarStyle={{backgroundColor:'#8c0032'}}
            labelStyle={{color:'#ffffff'}}
            activeBackgroundColor='#c2185b'
            >
              <Scene key="home" title="Home" >
                <Scene key="homeTab" icon={TabIcon} iconName="home" component={HomePage} title="Home" renderBackButton={()=>(null)} />
              </Scene>
              <Scene key="photosTab" title="Photos" >
                <Scene key="photos" icon={TabIcon} iconName="photo" component ={PhotosPage} title="Photos" />
              </Scene>
              <Scene key="membersTab" title="Members" >
                <Scene key="members" icon={TabIcon} iconName="users" component ={MembersPage} title="Members" />
              </Scene>

              <Scene key="aboutTab" title="About" >
                <Scene key="about" icon={TabIcon} iconName="info" component ={AboutPage} title="About" />
              </Scene>
              <Scene key="settingsTab" title="Settings" >
                <Scene key="settings" icon={TabIcon} iconName="gear" component ={SettingsPage} title="Settings" />
              </Scene>
          </Scene>

      	</Stack>
      </Router>
    );
  }
}
