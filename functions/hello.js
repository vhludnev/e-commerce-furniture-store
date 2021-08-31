// domain/.netlify/functions/hello.js
const items = [
	{ id: 1, name: 'Slava' },
	{ id: 2, name: 'Vyacheslav'}
]

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		//body: 'Hello world!',
		body: JSON.stringify(items) // creates api on netlify with an object items
	}
}