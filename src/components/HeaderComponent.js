import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Form, FormGroup, Input, Label,
        Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Head extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav (){
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        );
    }

    toggleModal(){
        this.setState(
            {
                isModalOpen: !this.state.isModalOpen
            }
        );
    }

    handleLogin(event){
        this.toggleModal();
        alert("username: "+ this.username.value + "password: " +this.password.value
            + "Remember: " + this.remember.checked  );
        event.preventDefault();    
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="Adrian dishBoard" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink classnName="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home                                </NavLink>
                            </NavItem>
                            <NavItem>
                               <NavLink classnName="nav-link" to="/aboutus">
                                   <span className="fa fa-info fa-lg"></span> About us 
                               </NavLink>
                            </NavItem>
                            <NavItem>
                               <NavLink classnName="nav-link" to="/menu">
                                   <span className="fa fa-list fa-lg"></span> Menu 
                               </NavLink>
                            </NavItem>
                            
                            <NavItem>
                               <NavLink classnName="nav-link" to="/contactus">
                                   <span className="fa fa-address-card fa-lg"></span> Contact Us 
                               </NavLink>
                            </NavItem>
                             
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal} >
                                    <span className="fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>React Dishes</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unquie fusion experience. Our lip smacking creation will  tickle your culinary senses !!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
                    <ModalHeader toggle={this.state.toggleModal} >Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin} >
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={(input) => this.username = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check></Label>
                                <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input} />
                                Remember Me
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Head;