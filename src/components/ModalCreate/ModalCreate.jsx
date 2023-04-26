import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Modal } from './ModalCreate.styled';
const rootModal = document.querySelector('#createModal')
console.log(rootModal)


const ModalCreate = ({children, onClose}) => {
    
    useEffect(() => {
        const handleEscape = (e) => {
            if(e.code === `Escape`){
                onClose()
            }
        }
        window.addEventListener('keydown', handleEscape)
    return () => {
        window.removeEventListener('keydown', handleEscape)
    }
    }, [onClose])

    const handleClose = (e) => {
        if(e.target === e.currentTarget){
            onClose()
            
        }
    }
    

    return (
        createPortal (
            <Backdrop onClick={handleClose}  >
                <Modal  >
                {children}
                </Modal>
        </Backdrop> , 
        rootModal
        )
    )
}


export default ModalCreate;