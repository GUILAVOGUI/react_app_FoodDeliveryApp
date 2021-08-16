// import { StatusBar as StatusBarIphone } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform } from 'react-native';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      /> */}
      <StatusBar
        animated={true}
        backgroundColor={colors.statusbar}

      // barStyle={statusBarStyle}
      // showHideTransition={statusBarTransition}
      // hidden={hidden} 

      />
      {/* {Platform.OS === 'ios' ? (
        <StatusBarIphone
          style='auto'
        />

      ) : (
        <></>
      )} */}
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <SignInScreen />

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'android' ? 'white' : colors.statusbar,
    flex: 1,
  },
});
