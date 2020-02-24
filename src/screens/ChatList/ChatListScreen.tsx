
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
}

const ChatListScreen: React.FC<IProps> = () => {
	return <View style={styles.container}><Text>ChatListScreen</Text></View>;
};

export default ChatListScreen;
