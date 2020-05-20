import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"; //icono de '+'
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import "./SendTweet.scss";

import {TWEETS_STORAGE} from '../../utils/constants'

const SendTweet = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {setToastProps, listTweets} = props;
  
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
    
    if(listTweets){
      //Si hubiese valores en el LS cuando se inicia x 1ra vez, se acumula el array en el LS
      arrayTweets = listTweets;
    }
    if (!name || !tweet) {
      setToastProps({
        open:true,
        text:"Los campos deben llenarse"
      })
    } else {
      formValue.time = moment();
      arrayTweets.push(formValue);
      //Al setear, AUTOMÁTICAMENTE se ACUMULARÁ al array del LS
      localStorage.setItem(TWEETS_STORAGE,JSON.stringify(arrayTweets));
      setToastProps({
        open:true,
        text:"Tweet enviado correctamente"
      })
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

      {/*Se le envia 2 props y un 'cotenido' llamado
        <FormSendTweet/> que se recibe como {children}*/}
      <ModalContainer 
        isOpenModal={isOpenModal} 
        closeModal={closeModal}>
          <FormSendTweet sendTweet={sendTweet}></FormSendTweet>
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
