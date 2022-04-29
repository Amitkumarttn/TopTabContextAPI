import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabBar from '../../components/TabbBar/TabBar';
import {TabProvider} from '../../context/TabContext';
import {TAB_ID_COMPONENT_POST} from '../../components/TabbBar/tabConstant';

const HomeScreen = () => {
  return (
    <View>
      <Text>some header</Text>
      <TabProvider initialTabId={TAB_ID_COMPONENT_POST}>
        <TabBar />
      </TabProvider>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
