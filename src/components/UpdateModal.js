import axios from 'axios';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// require("react-bootstrap/ModalHeader")



function UpdateModal(props) {
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

        const updateItemInfo = async (e) => {
            e.preventDefault();
            const itemData = {
                episodeName: e.target.name.value,
                episodeNumber: e.target.episode.value,
                airDate: e.target.air_date.value

            };
            console.log("after updateItemInfo func", itemData);
            const resultsUpdate = await axios.put(
                `${serverLink}/rick/${props.itemIndex}`, itemData
            );

            props.handleClose();
            updateNewEpisode(resultsUpdate.data)
        };

        const updateNewEpisode = (data) => {
            props.updateEpisode(data)
        }

  return (
    <>
    <div id='modal-parent' >
    <Modal {...props} centered show={props.show} onHide={props.handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
      </Modal.Header>
      <Form id='form' onSubmit={updateItemInfo}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control defaultValue={props.itemInfo.episodeName} type="text" name="name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="EpisodeNumber">
          <Form.Label>Episode Number</Form.Label>
          <Form.Control defaultValue={props.itemInfo.episodeNumber} type="text" name="episode"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Air Date</Form.Label> 
          <Form.Control defaultValue={props.itemInfo.airDate} type="text" name="air_date"/> 
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Item
        </Button>
      </Form>

      <Modal.Footer >
        <Button type="submit" variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  </>
  );
}

export default UpdateModal;