import React, { Children, ReactNode } from 'react';

import { House, User, Search, Settings } from 'lucide-react';

type ButtonLeftMenuProps = {
    icon: ReactNode;
    name: string;
};


const ButtonLeftMenu = ({ icon, name }: ButtonLeftMenuProps) => {
    return (
        <button className="button-left-menu">
            {icon}
            <span className='text-button-left-menu'>{name}</span>
        </button>
    );
};

export default ButtonLeftMenu;