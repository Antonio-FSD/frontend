import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Head.css';

const Categories = () => {

    const [ dropdown, setDropdown ] = useState(false);

    const closeDropdown = () => {
        setDropdown(!dropdown)
    }

    const [categories, setCategories] = useState([]);

    const getCategories = async function() {
        const categoriesInfo = await fetch(`${process.env.REACT_APP_BACKEND}/categories/list`);
        const parsedInfo = await categoriesInfo.json();

        setCategories(parsedInfo);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="categories">
            <Dropdown isOpen={dropdown} toggle={closeDropdown}>
                <DropdownToggle>Categorías</DropdownToggle>
                <DropdownMenu caret>
                    {categories.map((category) => (
                        <div key={category._id}>
                            <div className="category-box">
                            <DropdownItem>
                                <Link className="category-link" to={`/category/${category._id}`}>
                                    {category.name}
                                </Link>
                            </DropdownItem>
                            </div>
                        </div>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )

}

export default Categories;