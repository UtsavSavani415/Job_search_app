import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'


const TabButton = ({ name, activeTab, onHanleSearchType }) => {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)}
      onPress={onHanleSearchType}
    >
      <Text
        style={styles.btnText(name, activeTab)}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <View>
            <TabButton
              name={item}
              activeTab={activeTab}
              onHanleSearchType={() => setActiveTab(item)}
            />
            {/* <Text>{item}</Text> */}
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs