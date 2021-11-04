import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

export const TypeOfId = (props) => {

    const [type, setType] = useState([
        {
            name: 'CC',
            description: 'CC',
        },
        {
            name: 'TI',
            description: 'TI',
        },
        {
            name: 'CE',
            description: 'CE',
        },
        {
            name: 'PA',
            description: 'PA',
        },
    ])

    const [dropdownSelect, setDropdownSelect] = useState({
            name: 'Seleccione su tipo de identificacion',
            description: 'Seleccione su tipo de identificacion'
        }
    )

    const handleClick = (item) => {
        setDropdownSelect(item)
    }

    return (
        <div>
            <Dropdown className="m-3">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropdownSelect.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        type.map(item => (
                            <Dropdown.Item onClick={() => handleClick(item)}>{item.name}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}