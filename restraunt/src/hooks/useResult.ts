import { useState, useEffect } from "react";
import { yelp } from "../api/yelp";

export const useResult = (id: string): any => {
	const [result, setResult] = useState([]);

	const getData = async () => {
		try {
			const { data } = await yelp.get(`/${id}`);
			setResult(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return result;
};
