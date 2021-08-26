export const formatPrice = number => {
	return new Intl.NumberFormat('en-US', { // or without "new"
		style: 'currency',
		currency: 'USD',
	}).format(number / 100)
}
  
export const getUniqueValues = (data, type) => {
	let unique = data.map(item => item[type])

	if (type === 'colors') {
	  	unique = unique.flat() // will convert array of arrays in one array with unique colors
	}
	
	return ['all', ...new Set(unique)]
}
