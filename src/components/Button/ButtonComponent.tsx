
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
}

const ButtonComponent: React.FC<IProps> = () => {
	return <View style={styles.container}><Text>ButtonComponent</Text></View>;
};

export default ButtonComponent;
