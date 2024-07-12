'use client'

import { useEffect } from "react"

export default function Modal({isVisible, onClose, children}: any) {
    useEffect(() => {
        if (isVisible) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    }, [isVisible]);
    
    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-black/10" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}