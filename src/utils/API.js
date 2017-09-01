import axios from "axios";
import moment from 'moment';

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "b1cb357a364f43a79c1caec9f95c599c";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: (query, start, end) => {
    return axios.get(`${BASEURL}&q=${query}&begin_date=${start}0101&end_date=${end}0101&api-key=${APIKEY}`)
	.then(res => {
		return res.data.response.docs.map(article => {
			return {
				key: article._id,
    			date: moment(article.pub_date).format('MM/DD/YYYY'),
    			title: article.headline.main,
    			url: article.web_url
			}
		})
	})
	.catch(err => console.log('err:',err.message))
  }
};
