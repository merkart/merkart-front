import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

export const CategorySelect = (props) => {

    const [category, setCategory] = useState([
        {
            name: 'Accesorios',
            description: 'accesorios',
        },
        {
            name: 'Sombreros',
            description: 'sombreros',
        }
    ])

    const [dropdownSelect, setDropdownSelect] = useState({
            name: 'Seleccione una Categoria',
            description: 'Seleccione una Categoria'
        }
    )

    const handleClick = (item) => {
        setDropdownSelect(item)
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropdownSelect.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        category.map(item => (
                            <Dropdown.Item onClick={() => handleClick(item)}>{item.name}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

