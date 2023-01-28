
import axios from 'axios';


function DeleteEp(props) {
const serverLink = process.env.REACT_APP_SERVER;

    const deleteEpisode = async () => {
        // console.log(serverLink)
        let resultsEpisode = await axios.delete(`${serverLink}/rick/${props.item._id}`);
        props.setResults(resultsEpisode.data)
    };
    deleteEpisode();


}

export default DeleteEp