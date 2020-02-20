import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
	const Context = React.createContext(null);

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		// actions === {addBlogPost : (dispatch) => {return () => {dispatch()}}}
		const handleActions = {};
		for (let key in actions) {
			handleActions[key] = actions[key](dispatch);
		}

		return (
			<Context.Provider value={{ state, ...handleActions }}>
				{children}
			</Context.Provider>
		);
	};

	return { Context, Provider };
};
