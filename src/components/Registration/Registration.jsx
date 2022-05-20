import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';
import Contact from '../Contact/Contact'
import Contact2 from '../Contact/Contact2'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import {Outlet, Link} from "react-router-dom"

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("username", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)
        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }



    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Info Party</h4>
                </div>
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Choose your age</label>
                    <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                        <option></option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                    </Form.Control>
                </div>
                


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Deja esti inregistrat <a href="#" onClick={handleClick} >Logheaza-te?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Trebuie de completat toate campurile!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                    <p><strong>Date:</strong> 24.06.2022</p>
                    <p><strong>Address:</strong> Straseni Strada M.Eminescu 32</p>
                    <p><strong>Phone:</strong> 37369999999</p>
                    <p><strong>Email:</strong> dumitru.roscovanu@iis.utm.md</p>
                    <ul>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/contact2">Contact 2</a>
                            </li>
                    </ul>
                    <div className="form-group">
                        
                        <Router>
                            <Routes>
                                <Route path="/contact" element={<Contact/>} />
                                <Route path="/contact2" element={<Contact2/>} />
                            </Routes>
                        </Router>
                    </div>
                </div>}
        </>
    )
}

export default Registration
