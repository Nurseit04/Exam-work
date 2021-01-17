import React, {Component} from 'react';
import Item from "./item";
import Pagination from "react-js-pagination"
import {withRouter} from "react-router-dom";


class Products extends Component {
    handlePageChange = (page) => {
        const {location} = this.props
        this.props.history.push({...location, search: `?page=${page}&page_size=3`})
    }

    render() {
        const params = new URLSearchParams(this.props.location.search)
        const page = +params.get("page")||"1"
        const {products} = this.props
        const {count, results} = products
        return (
            <main>
                <h1>Продукты</h1>
                <div className="row">
                    {results.map((item) => <Item key={item.id} item={item}/>)}
                </div>
                <br/>
                <br/>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={3}
                    totalItemsCount={count}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    itemClass={"page-item"}
                    linkClass={"page-link"}
                />
                <h3>Калдарбеков Нурсеит</h3>
                <h3>IT-7</h3>
            </main>
        );
    }
}

export default withRouter(Products);