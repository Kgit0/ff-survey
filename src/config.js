const prod={
	base_url: 'https://fuel-finder-001.herokuapp.com'
}
const dev= {
	base_url: 'http://localhost:8000'
}

const config = process.env.NODE_ENV === 'production'
? prod
: dev;

export default {
	...config
};