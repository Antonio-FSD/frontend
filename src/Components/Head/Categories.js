import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Head.css';

const Categories = () => {

    const [ dropdown, setDropdown ] = useState(false);

    const closeDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className='categories'>
            <Dropdown isOpen={dropdown} toggle={closeDropdown}>
                <DropdownToggle>Categorías</DropdownToggle>

                <DropdownMenu caret>
                    <DropdownItem>Ciencia Ficción</DropdownItem>
                    <DropdownItem>Infantil</DropdownItem>
                    <DropdownItem>Terror</DropdownItem>
                    <DropdownItem>Anime</DropdownItem>
                    <DropdownItem>Humor</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>
    )

}

export default Categories;