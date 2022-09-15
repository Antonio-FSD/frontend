import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Head.css';

const Genres = () => {

    const [ dropdown, setDropdown ] = useState(false);

    const closeDropdown = () => {
        setDropdown(!dropdown)
    }

    const [genres, setGenres] = useState([]);

    const getGenres = async function() {
        const genresInfo = await fetch(`${process.env.REACT_APP_BACKEND}/genres/list`);
        const parsedInfo = await genresInfo.json();

        setGenres(parsedInfo);
    };

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <div className="genres">
            <Dropdown isOpen={dropdown} toggle={closeDropdown}>
                <DropdownToggle>Géneros</DropdownToggle>
                <DropdownMenu>
                    {genres.map((genre) => (
                        <div key={genre._id}>
                            <div className="genre-box">
                            <DropdownItem>
                                <Link className="genre-link" to={`/genre/${genre._id}`}>
                                    {genre.name}
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

export default Genres;