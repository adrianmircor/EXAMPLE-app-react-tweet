import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"; //icono de '+'
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";

import "./SendTweet.scss";

import {TWEETS_STORAGE} from '../../utils/constants'

const SendTweet = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (e, formValue) => {
    e.preventDefault();
    const { name, tweet } = formValue;

    let arrayTweets = []

    if (!name || !tweet) {
      console.log("Campos deben ser obligatorios");
    } else {
      formValue.time = moment();
      arrayTweets.push(formValue);
      localStorage.setItem(TWEETS_STORAGE,JSON.stringify(arrayTweets));
      console.log("Tweet enviado correctamente");
      closeModal();
    }

    arrayTweets = [];

  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={() => openModal()}
      >
        <AddIcon></AddIcon>
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet}></FormSendTweet>
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
