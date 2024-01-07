import React from 'react'
import cl from "./../style/modal.module.css"

function Modal({children, visiable, setVisiable}) {
  const rootClasses = [cl.myModal];
  if (visiable) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join('')} onClick={() => setVisiable(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal