import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

import {
  TAB_CONSTANTS,
  TAB_ID_COMPONENT_POST,
  TAB_ID_COMPONENT_REEL,
  TAB_ID_COMPONENT_VIDEO,
  TAB_ID_COMPONENT_TAG,
} from './tabConstant';

import PostScreen from '../../screen/PostScreen';
import ReelScreen from '../../screen/ReelScreen';
import VideoScreen from '../../screen/VideoScreen';
import TagScreen from '../../screen/TagScreen';

import {TabContext} from '../../context/TabContext';

const TabBar = () => {
  const ContextTab = useContext(TabContext);
  const {selectedTabId} = ContextTab;
  return (
    <SafeAreaView>
      <View style={styles.tabBarContainer}>
        {TAB_CONSTANTS.map((item, index) => (
          <TabView data={item} key={index} />
        ))}
      </View>
      <PostScreen show={TAB_ID_COMPONENT_POST === selectedTabId} />
      <ReelScreen show={TAB_ID_COMPONENT_REEL === selectedTabId} />
      <VideoScreen show={TAB_ID_COMPONENT_VIDEO === selectedTabId} />
      <TagScreen show={TAB_ID_COMPONENT_TAG === selectedTabId} />
    </SafeAreaView>
  );
};

export default TabBar;

const TabView = ({ data }) => {
  const ContextTab = useContext(TabContext);

  const { toggleTabId, selectedTabId } = ContextTab;
  const { id, text } = data;

  const isSelected = id === selectedTabId;

  const selectedTabColor = isSelected ? styles.activeTabStyle : {};
  const selectedTextColor = isSelected ? styles.activeTextStyle : {};

  return (
    <View>
      <TouchableOpacity
        style={[styles.inActiveTabStyle, selectedTabColor]}
        onPress={() => toggleTabId(id)}>
        <Text style={[styles.inactiveTabTextStyle, selectedTextColor]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    marginHorizontal: 24,
  },
  inActiveTabStyle: {
    paddingBottom: 14,
    paddingHorizontal: 10,
  },
  inactiveTabTextStyle: {
    fontSize: 14,
    color: '#000',
    fontWeight: '100'
  },
  activeTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  activeTextStyle: {
    fontWeight: 'bold'
  },
});
