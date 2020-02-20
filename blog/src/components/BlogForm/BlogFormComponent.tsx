import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";

interface IProps {
	initialTitle?: string;
	initialText?: string;
	onSubmitHandler: any;
}

const BlogFormComponent: React.FC<IProps> = ({
	initialTitle = "",
	initialText = "",
	onSubmitHandler
}) => {
	const [title, setTitle] = useState(initialTitle);
	const [text, setText] = useState(initialText);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter Title</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={newTitle => setTitle(newTitle)}
			/>
			<Text style={styles.label}>Enter Text</Text>
			<TextInput
				style={styles.input}
				value={text}
				onChangeText={newText => setText(newText)}
			/>
			<Button title="save" onPress={() => onSubmitHandler(title, text)} />
		</View>
	);
};

export default BlogFormComponent;
