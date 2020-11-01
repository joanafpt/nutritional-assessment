import React from 'react';
import './Modal.css';
import { IoMdClose } from "react-icons/io";

const Modal = (props) => {
    console.log(props);
    if (!props.show) {
        return null;
    }
    //console.log(props);
    return (

        <div className="modal1" style={styles.modal}>
            <div className="modal-background"
                style={styles.modalBackground}
                onClick={props.onClose} />
            <div className="backdrop">
                <div className="row">
                    <div className="col col-12">
                        <button className="btn btn-default float-right shadow-none"
                            style={styles.buttonZero}
                            onClick={props.onClose}>
                            <IoMdClose />
                        </button>
                    </div>
                </div>

                <div className="output-description">
                    <div className="title-popup">
                        {props.drinkForm ? props.commonStringBeverage : props.commonString}
                    </div>
                    <div className="nutri-eval">
                        {props.validationOfFatSolids}<br />
                        {props.validationOfSaturSolids}<br />
                        {props.validationOfSugarSolids}<br />
                        {props.validationOfSaltSolids}<br />
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    buttonZero: {
        backgroundColor: 'transparent',
        color: 'black',
    },
    modalBackground: {
        position: 'fixed',
        backgroundColor: 'black',
        opacity: 0.5,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    modal: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        position: 'fixed',
    },
}

export default Modal;