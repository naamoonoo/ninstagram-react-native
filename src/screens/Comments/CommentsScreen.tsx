
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
}

const CommentsScreen: React.FC<IProps> = () => {
	return <View style={styles.container}><Text>CommentsScreen</Text></View>;
};

export default CommentsScreen;
