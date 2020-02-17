import axios from "axios";

export const yelp = axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer 1KDp22WCxdvYMDs0TwX1Pi2zVLTK2LwDEXXaq00VA-_jeleXX4HpYuxazPtEBfi3HIC_de1qwJy-brfZAr21dJx59b5PPdQZHU87rwSyzfb5mCyrXQ2fhCFn9mjgXHYx"
	}
});

// Object {
// 	"alias": "pizza-julia-paris",
// 	"categories": Array [
// 	  Object {
// 		"alias": "pizza",
// 		"title": "Pizza",
// 	  },
// 	],
// 	"coordinates": Object {
// 	  "latitude": 48.8516654154578,
// 	  "longitude": 2.37197349693813,
// 	},
// 	"display_phone": "+33 1 77 19 68 75",
// 	"distance": 2464.0005068318546,
// 	"id": "nf7DA_2nihG63h3LyFUABQ",
// 	"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/LS699KOW07g6L1uz0O5mqg/o.jpg",
// 	"is_closed": false,
// 	"location": Object {
// 	  "address1": "43 rue de Charenton",
// 	  "address2": "",
// 	  "address3": "",
// 	  "city": "Paris",
// 	  "country": "FR",
// 	  "display_address": Array [
// 		"43 rue de Charenton",
// 		"75012 Paris",
// 		"France",
// 	  ],
// 	  "state": "75",
// 	  "zip_code": "75012",
// 	},
// 	"name": "Pizza Julia",
// 	"phone": "+33177196875",
// 	"price": "€",
// 	"rating": 4.5,
// 	"review_count": 135,
// 	"transactions": Array [],
// 	"url": "https://www.yelp.com/biz/pizza-julia-paris?adjust_creative=VZEnkTN3nYIS9QG2LQwbiA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VZEnkTN3nYIS9QG2LQwbiA",
//   }
