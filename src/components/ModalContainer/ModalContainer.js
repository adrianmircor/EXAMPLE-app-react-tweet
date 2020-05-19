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

            <div>{children}</div>

        </Modal>
    );
}
 
export default ModalContainer;


/*
Uso del CHILDREN
<ModalContainer>
    ... (aqui irá todo el children)
</ModalContainer>

*/