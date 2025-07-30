import React from "react";
import ButtonLeftMenu from "../Button/ButtonLeftMenu";
import ButtonPublish from "../Button/ButtonPublish";
import {House, User, Search, Settings} from 'lucide-react';
// @ts-ignore
import leafIconGreen from '../../../icon/leaftitIcon-green.svg';

const menu = [
    {icon: <House/>, name: 'Accueil'},
    {icon: <User/>, name: 'Profil'},
    {icon: <Search/>, name: 'Rechercher'},
    {icon: <Settings/>, name: 'Paramètres'},
]

const LeftMenu = () => {
    return (
        <div className="left-menu">
            <div className="div-leaf-it-menu">
                <img src={leafIconGreen} alt="Leaf Icon" className="leaf-it-icon-menu"/>
                <h1 className="leaf-it-title-menu">Leaf-it</h1>
            </div>
            <div id="div-menu-button">
                {menu.map((item, index) => (
                    <ButtonLeftMenu
                        key={index}
                        icon={item.icon}
                        name={item.name}
                    />
                ))}
            </div>
            <a className="button">Publier</a>
        </div>
    );
}

export default LeftMenu;
