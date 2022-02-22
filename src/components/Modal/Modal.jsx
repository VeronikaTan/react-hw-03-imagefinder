import { Component } from "react";
import {createPortal} from "react-dom";

import PropTypes from "prop-types";

import s from "./Modal.module.css"

const modalRoot = document.getElementById("modal-root");
class Modal extends Component {
componentDidMount(){
        window.addEventListener("keydown", this.close)
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.close)
    }

    close = (e)=> {
        if(e.code === "Escape"){
            return this.props.closeModal()
        }
        const {currentTarget, target} = e;
        if(currentTarget === target) {
           this.props.closeModal()
        }
    }

    render() {
            const {children} = this.props;
        return createPortal((
            <div className={s.overlay} onClick={this.close}>
                <div className={s.modal}>
                    <img src={this.props.picture} alt={this.props.tags} />
                    {children}
                </div>
            </div>
        ), modalRoot)
    }
}

export default Modal;

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}