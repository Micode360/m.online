import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import addidas from "../img/addidas_ball.png"
import { Dropdown } from "react-bootstrap"
import  Carousel  from "./carousel"




export default function Darshboard() {

    return (
        <div>
            <header className="header">
                <h4 className="text-white">m.<span className="orange">online</span></h4>

                <nav className="header-nav row">
                    <div>
                        <Link className="white m-4 text-white" to="/">
                            Categ<span className="orange">ories</span>
                        </Link>
                    </div>
                    <div>
                        <Link className="white text-white" to="/">
                            Your <span className="orange">Cart</span>
                            <FontAwesomeIcon
                                icon="fa-shopping-cart" />
                        </ Link>
                    </div>
                </nav>
            </header>
            <section className="showcase">
                <div className="showcase-text">
                    <h1>Be Online</h1>
                    <p>m.oline is an ecommerce Site offering online shopping From all over the word .</p>
                </div>
            </section>

            
            <section className="body-section">
            <Carousel/>
            
                <div className="b-2nd-sub-header p-2 rounded">
                    <div>
                        <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="dropdown-menu-c3">
                                    Categories
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>
                </div>

                <div className="items-grid-section">

                    <div className="item-card">
                        <div className="item-card-body">
                            <div className="item-img-container">
                                <img src={addidas} alt="addidas_ball" className="item-img" />
                            </div>
                            <div className="inline item-amount-inline-case">
                                <span className="amount">$2.33</span>
                                <button className="add">Add</button>
                            </div>
                            <div className="card-info">
                                <h4 className="item">Adidas 416 Pro</h4>
                                <p className="item-description">2021 ball brand with Aesthetic letter upgrade</p>
                            </div>
                        </div>
                    </div>


                    <div className="item-card">
                        <div className="item-card-body">
                            <div className="item-img-container">
                                <img src={addidas} alt="addidas_ball" className="item-img" />
                            </div>
                            <div className="inline item-amount-inline-case">
                                <span className="amount">$2.33</span>
                                <button className="add">Add</button>
                            </div>
                            <div className="card-info">
                                <h4 className="item">Adidas 416 Pro</h4>
                                <p className="item-description">2021 ball brand upgrade 2021 ball brand upgrade 2021 ball brand upgrade 2021 ball brand upgrade 2021 ball brand upgrade</p>
                            </div>
                        </div>
                    </div>


                    <div className="item-card">
                        <div className="item-card-body">
                            <div className="item-img-container">
                                <img src={addidas} alt="addidas_ball" className="item-img" />
                            </div>
                            <div className="inline item-amount-inline-case">
                                <span className="amount">$2.33</span>
                                <button className="add">Add</button>
                            </div>
                            <div className="card-info">
                                <h4 className="item">Adidas 416 Pro</h4>
                                <p className="item-description">2021 ball brand with Aesthetic letter upgrade</p>
                            </div>
                        </div>
                    </div>


                    <div className="item-card">
                        <div className="item-card-body">
                            <div className="item-img-container">
                                <img src={addidas} alt="addidas_ball" className="item-img" />
                            </div>
                            <div className="inline item-amount-inline-case">
                                <span className="amount">$2.33</span>
                                <button className="add">Add</button>
                            </div>
                            <div className="card-info">
                                <h4 className="item">Adidas 416 Pro</h4>
                                <p className="item-description">2021 ball brand with Aesthetic letter upgrade</p>
                            </div>
                        </div>
                    </div>




                </div>

            </section>
        </div>
    )
}