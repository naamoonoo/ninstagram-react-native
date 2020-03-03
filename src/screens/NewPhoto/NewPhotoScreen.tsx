
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
}

const NewPhotoScreen: React.FC<IProps> = () => {
	return <View style={styles.container}><Text>NewPhotoScreen</Text></View>;
};

export default NewPhotoScreen;
