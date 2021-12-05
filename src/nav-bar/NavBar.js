import {Navbar, Nav, Container, NavDropdown, Button, Offcanvas} from 'react-bootstrap';
import {Link, Route, useHistory} from "react-router-dom";
import lineasImg from '../Home/assets/img/lineasArt.png'
import "./styles.scss"
import SearchBar from "./SearchBar";
export const NavBar = ()=>{
    const history = useHistory()
    const routeChange=(route)=>{
        history.push({
            pathname:route
        })
    }
    return(
        <>
        <Navbar  fixed={"top"} className="nav-orange-pag"  expand="true" >
            <Container fluid >
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={"order-0"} />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start" className="nav-orange-bg" >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    {/* <NavDropdown className="me-auto" title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item  href="/carrito">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/historial">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/categorias">Something</NavDropdown.Item>
                        <NavDropdown.Item href="/historias">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/recomendaciones">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cerrar Sesion</NavDropdown.Item>
                    </NavDropdown>*/}
                    <Nav className="me-auto mx-5">
                        <SearchBar/>
                        <Nav.Link className="link-color" onClick={()=>{routeChange("/searchpage")}} >productos</Nav.Link>
                        <Nav.Link className="link-color" onClick={()=>{routeChange("/")}}>Home</Nav.Link>
                        <Nav.Link className="link-color" onClick={()=>{routeChange("/carrito/1")}} >Carrito de compras</Nav.Link>
                        <Nav.Link className="link-color" onClick={()=>{routeChange("/historial/1")}} >Historial</Nav.Link>
                        {/*<Nav.Link className="link-color" href="/categorias">Categorias</Nav.Link>*/}
                        <Nav.Link  className="link-color" onClick={()=>{routeChange("/historias")}} >Historias</Nav.Link>
                        <Nav.Link  className="link-color" onClick={()=>{routeChange("/recomendaciones")}}>Recomendaciones</Nav.Link>
                        <Nav.Link  className="link-color" onClick={()=>{routeChange("/crearProducto")}} >ingresar producto</Nav.Link>
                        <NavDropdown.Divider className={"col-9"}/>
                        <Nav.Link className="link-color"  onClick={()=>{routeChange("/")}}>Cerrar Sesion</Nav.Link>

                    </Nav>
                </Navbar.Offcanvas>
                <Navbar.Brand href="/Home" className={"order-1 ml-1"}><Button className="logo" ></Button></Navbar.Brand>


                <Button className="order-2 " variant="link">
                    <img  src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png"/>
                </Button>

            </Container>
        </Navbar>
        </>
    )
}
