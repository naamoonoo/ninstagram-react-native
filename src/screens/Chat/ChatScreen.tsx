
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
}

const ChatScreen: React.FC<IProps> = () => {
	return <View style={styles.container}><Text>ChatScreen</Text></View>;
};

export default ChatScreen;
