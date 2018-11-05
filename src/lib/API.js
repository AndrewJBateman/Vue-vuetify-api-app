/* eslint-disable */
import ezFetch from 'ez-fetch';

const API_URL = 'https://localhost:5000/api/v1/products';
	
export default {
	getProducts() {
		return ezFetch.get(API_URL);
	},
	getProduct	() {
		return ezFetch.get(`${API_URL}/${id}`);
	},
};