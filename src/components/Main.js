import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups'
import About from './About'
import Productdetails from './Productdetails'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import AddCarousel from './Carrousel/Carousel'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Meetups} />
            <Route exact path='/about' component={About} />
            <Route exact path='/product/add' component={AddProduct} />
            <Route exact path='/carousel/add' component={AddCarousel} />
            <Route exact path='/product/edit/:id' component={EditProduct} />
            <Route exact path='/product/:id' component={Productdetails} />
        </Switch>
    </main>
)

export default Main