import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import "../styles/Header.css"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import FaveEpisode from "./FaveEpisode";
import UpdateModal from "./UpdateModal";



function Favourites () {
    const { user } = useAuth0();

    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems, setShowItems] = useState(false);
    const [itemInfo, setItemInfo] = useState({});
    const [index, setIndex] = useState(0);
    const [apiData, setAPIData] = useState([])
    // const [reloadPage, setReloadPage] = useState(window.location.reload(false))
    const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);

    useEffect(() => {
        const getFaveEpisode = async () => {
            // let username = user.email;
            let resultEp = await axios.get(`${serverLink}/rick`);
            // console.log("GetFaveChar", resultEp.data);
            // console.log(results);
            setResults(resultEp.data);
            // setShowItems(true);
            
        }
        getFaveEpisode();

    }, []);

    const showUpdateModal = async(chosenItem) =>{
      setShowUpdateModalStatus(true);
      setItemInfo(chosenItem);
      setIndex(chosenItem._id);

  }
    
const updateEpisode = (results) => {
  setResults(results)
}

const handleCloseUpdate = () => {
  setShowUpdateModalStatus(false)
}

// const itemAdded = () => {
//   setAlert("item added to favourites (:")
//   console.log("item added!")
// }



    // setReloadedData(resultsEpisode.data);

        // const getData = async () => {
        //     let ricks = await axios.get(`${serverLink}/rick`)
        //      setAPIData(ricks)

        //     //  console.log("after deleting", resultsEpisode.data)
        //     //  setResults(resultsEpisode.data);
        //      setShowItems(true)


        //  }
        //  getData()

        





    // setReloadedData(resultsEpisode));

return(
    <div id="return" >
    <h1>Your Favourite Episodes</h1>

    <div
      style={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        padding: "4rem",
      }}
    >
      {
        results.map((item, index) => {
          console.log("in the map", results)
          return(

          <FaveEpisode
            item={item}
            key={index}
            setResults={setResults}
            // deleteEpisode = {deleteEpisode}
            showUpdateModalProps = {showUpdateModal}
          />);
          
        })}

        <UpdateModal
         show={showUpdateModalStatus}
         handleClose={handleCloseUpdate}
         itemInfo={itemInfo}
         itemIndex={index}
         updateEpisode={updateEpisode}
          />
    </div>
    </div>
);
      }



export default Favourites;