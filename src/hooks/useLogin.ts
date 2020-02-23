// userLogIn: (_: any, { token }: any, { cache: appCache }: any) => {
// 				AsyncStorage.setItem("jwt-token", token);
// 				appCache.writeData({
// 					data: {
// 						auth: {
// 							__typename: "Auth",
// 							isLoggedIn: true
// 						}
// 					}
// 				});
// 				return null;
// 			},
// 			userLogOut: (_: any, __: any, { cache: appCache }: any) => {
// 				AsyncStorage.removeItem("jwt-token");
// 				appCache.writeData({
// 					data: {
// 						auth: {
// 							__typename: "Auth",
// 							isLoggedIn: false
// 						}
// 					}
// 				});
// 				return null;
// 			}
