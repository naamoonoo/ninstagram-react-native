import createDataContext from "./createDataContext";

enum AuthTypes {
	"Login",
	"Logout"
}

const authReducer = (state, action: { type: AuthTypes; paylaod: any }) => {
	switch (action.type) {
		case AuthTypes.Login:
			return action.paylaod;
		case AuthTypes.Logout:
			return {};
		default:
			return state;
	}
};

const actions = {
	login(dispatch) {
		return (user: any) => {
			console.log(user);
			dispatch({ type: AuthTypes.Login, paylaod: user });
		};
	},

	logout(dispatch) {
		return () => {
			dispatch({ type: AuthTypes.Logout });
		};
	}
};

export const {
	Context: UserContext,
	Provider: UserProvier
} = createDataContext(authReducer, { ...actions }, {});
