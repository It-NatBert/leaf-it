import React, {useState} from 'react'
// @ts-ignore
import leafIconGreen from '../../../icon/leaftitIcon-green.svg';
// @ts-ignore
import leafIconWhite from '../../../icon/leaftitIcon-white.svg';

const ButtonAddTrees = ({flag, setFlag}: { flag: boolean, setFlag: (value: boolean) => void }) => {

    const handleOnClick = () => {
        setFlag(!flag)
    }

    return (
        <div className={`button-flare ${flag ? 'addToTrees' : 'notAddToTrees'}`}
             onClick={handleOnClick}>
            {!flag && <img src={leafIconWhite} alt="Leaf Icon" className="leaf-icon"/>}
            {flag && <img src={leafIconGreen} alt="Leaf Icon" className="leaf-icon"/>}
        </div>
    )
}

export default ButtonAddTrees
