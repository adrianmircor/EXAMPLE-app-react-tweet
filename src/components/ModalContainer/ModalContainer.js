import React from 'react';
import './ModalContainer.scss'
import {Modal} from '@material-ui/core' //Componente ui

const ModalContainer = (props) => {

    //children: es todo lo que está dentro del componente que envia los props
    const {isOpenModal, closeModal, children} = props

    return (  
        <Modal
            className="modal-container"
            open={isOpenModal} //open: cambia a true 'isOpen'
            onClose={closeModal} //onClose: cambia a false a 'isOpen'
            closeAfterTransition>

            {/*Recibe el contenido(es un <FormSendTweet/>) cuando se llamó a 
            este componente desde SendTweet */}
            <div>{children}</div> 

        </Modal>
    );
}
 
export default ModalContainer;


/*
Uso del CHILDREN:

Normalmente, se llama a un componente para enviarle los props,
sin embargo en el caso de SendTweet, le envia props y además lo que está 
dentro del componente cuando lo llama. Ejm 

<ModalContainer>
    ... (Esto es todo el children)
</ModalContainer>

*/