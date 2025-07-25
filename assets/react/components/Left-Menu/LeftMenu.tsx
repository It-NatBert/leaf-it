import React from "react";
import ButtonLeftMenu from "../Button/ButtonLeftMenu";
import ButtonPublish from "../Button/ButtonPublish";
import { House, User, Search, Settings } from 'lucide-react';

const menu=[
    {icon:<House />,name:'Accueil'},
    {icon:<User />,name:'Profil'},
    {icon:<Search />,name:'Rechercher'},
    {icon:<Settings />,name:'Paramètres'},
]

const LeftMenu = () => {
    return (
        <>
            <div id="div-menu-button">
                {menu.map((item, index) => (
                    <ButtonLeftMenu
                        key={index}
                        icon={item.icon}
                        name={item.name}
                    />
                ))}
            </div>
            <ButtonPublish />
        </>
    );
}

export default LeftMenu;