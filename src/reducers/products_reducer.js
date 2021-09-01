import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const INITIAL_STATE = {
	isSidebarOpen: false,
	featured_products: undefined,
	products: undefined,
	products_loading: false,
	products_error: false,
	single_product: undefined,
	single_product_loading: false,
	single_product_error: false
};

const products_reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIDEBAR_OPEN:
			return {
				...state,
				isSidebarOpen: true
			};
		case SIDEBAR_CLOSE:
			return {
				...state,
				isSidebarOpen: false
			};
		case GET_PRODUCTS_BEGIN:
			return {
				...state,
				products_loading: true
			};
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products_loading: false, 
				products: action.payload,
				featured_products: action.payload.filter(product => product.featured === true)
			};
		case GET_PRODUCTS_ERROR:
			return {
				...state,
				products_loading: false, 
				products_error: true
			};
		case GET_SINGLE_PRODUCT_BEGIN:
			return {
				...state,
				single_product_loading: true, 
				single_product_error: false
			};
		case GET_SINGLE_PRODUCT_SUCCESS:
			return {
				...state,
				single_product_loading: false, 
				single_product: action.payload
			};
		case GET_SINGLE_PRODUCT_ERROR:
			return {
				...state,
				single_product_loading: false, 
				single_product_error: true
			};
		default:
			return state;
	}
	
}

// const products_reducer1 = (state, action) => {
// // SIDEBAR
// 	if (action.type === SIDEBAR_OPEN) {
// 		return { ...state, isSidebarOpen: true }
// 	}
// 	if (action.type === SIDEBAR_CLOSE) {
// 		return { ...state, isSidebarOpen: false }
// 	}
// // GETTING ALL PRODUCTS
// 	if (action.type === GET_PRODUCTS_BEGIN) {
// 		return { ...state, products_loading: true }
// 	}
// 	if (action.type === GET_PRODUCTS_SUCCESS) {
// 		//const featured_products = action.payload.filter(product => product.featured === true)
// 		return { ...state, products_loading: false, products: action.payload,
// 			featured_products: action.payload.filter(product => product.featured === true)
// 		}
// 	}
// 	if (action.type === GET_PRODUCTS_ERROR) {
// 		return { ...state, products_loading: false, products_error: true }
// 	}
// // GETTING A SINGLE PRODUCT
// 	if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
// 		return { ...state, single_product_loading: true, single_product_error: false } // "single_product_error: false" - is just in case 
// 	}
// 	if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
// 		return { ...state, single_product_loading: false, single_product: action.payload }
// 	}
// 	if (action.type === GET_SINGLE_PRODUCT_ERROR) {
// 		return { ...state, single_product_loading: false, single_product_error: true }
// 	}

//   	//return state
//   	throw new Error(`No Matching "${action.type}" - action type`)
// }

export default products_reducer
