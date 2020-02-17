import { useState, useEffect } from "react";
import { yelp } from "../api/yelp";

export const useResults = (): [any[], (term: string) => Promise<void>] => {
	const [results, setResults] = useState([]);

	const getData = async (term: string) => {
		try {
			const {
				data: { businesses }
			} = await yelp.get("/search", {
				params: {
					limit: 50,
					term,
					location: "paris"
				}
			});
			setResults(businesses);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData("pizza");
	}, []);

	return [results, getData];
};
