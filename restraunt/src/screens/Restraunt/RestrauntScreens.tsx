import React from "react";
import { View, Text, FlatList, Image, Linking, Platform } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute, Route } from "@react-navigation/native";
import { useResult } from "../../hooks/useResult";
import { Feather } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

interface IRoute extends Route<"RESTRAUNT"> {
	params: {
		id: string;
	};
}
interface IProps {}

const RestrauntScreens: React.FC<IProps> = ({}) => {
	const {
		params: { id }
	} = useRoute<IRoute>();
	const {
		name,
		is_closed,
		phone,
		review_count,
		categories,
		rating,
		photos,
		coordinates
	} = useResult(id);
	const region = {
		...coordinates,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	};

	const dialCall = number => {
		let phoneNumber = "";
		if (Platform.OS === "android") {
			phoneNumber = `tel:${number}`;
		} else {
			phoneNumber = `telprompt:${number}`;
		}
		Linking.openURL(phoneNumber);
	};

	const category =
		categories && categories.map(category => category.title).join(", ");
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.categroy}>{category}</Text>
			<FlatList
				data={photos}
				keyExtractor={(photo: string) => photo}
				renderItem={({ item }) => (
					<Image
						style={styles.image}
						key={item}
						source={{ uri: item }}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
			<View style={styles.infos}>
				<Text style={styles.detail}>
					{rating} stars, {review_count} reviews
				</Text>
				<Feather
					name="phone"
					size={25}
					style={{
						...styles.phone,
						color: is_closed ? "green" : "red"
					}}
					onPress={() => dialCall(phone)}
				/>
			</View>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>
				<Marker
					coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
					title={name}
					description={category}
				/>
			</MapView>
		</View>
	);
};

export default RestrauntScreens;
