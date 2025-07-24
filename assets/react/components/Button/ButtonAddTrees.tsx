import React, { useState } from 'react'
// @ts-ignore
import leafIconGreen from '../../../icon/leaftitIcon-green.svg';
// @ts-ignore
import leafIconWhite from '../../../icon/leaftitIcon-white.svg';

const ButtonAddTrees = () => {

  const [addPostToTree, setAddPostToTree] = useState(false);

  const handleOnClick = () => {
    addPostToTree ? setAddPostToTree(false) : setAddPostToTree(true);
  }

  return (
    <div>
      <button className={`button-flare button ${addPostToTree ? 'addToTrees' : 'notAddToTrees'}`} onClick={handleOnClick}>
        {!addPostToTree && <img src={leafIconWhite} alt="Leaf Icon" className="leaf-icon" />}
        {addPostToTree && <img src={leafIconGreen} alt="Leaf Icon" className="leaf-icon" />}
      </button>
    </div>
  )
}

export default ButtonAddTrees
