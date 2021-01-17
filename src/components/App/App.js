import React, {Component} from 'react';
import NavbarCustom from "../Navbar/Navbar";
import axios from "axios";
import Products from "../products/products";
import {Jumbotron} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class App extends Component {

    state = {
        products: {
            count: 0,
            results: []
        },
    }

    componentDidMount() {
        this.getProduct()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( this.props.location.search!== prevProps.location.search) {
            this.getProduct()
        }
    }

    getProduct = () => {
        const search = this.props.location.search
        axios.get("https://ecommerce-7-api.itpark.edu.kg/api/products/" + search).then((response) => {
            this.setState({products: response.data})
        })
    }

    render() {
        const state = this.state
        return (
            <div>
                <NavbarCustom/>
                <Jumbotron>
                    <Products products={state.products}/>
                </Jumbotron>
            </div>
        );
    }
}

export default withRouter(App);