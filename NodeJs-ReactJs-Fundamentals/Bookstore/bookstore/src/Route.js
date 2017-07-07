import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Authors from './components/Authors'
import AuthorDetails from './components/AuthorDetails'
import NotFoundPage from './components/NotFoundPage'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} /> 
        <Route path='/books/all' component={Books} />
        <Route path='/books/:id' component={BookDetails} />        
        <Route path='/authors/all' component={Authors} />
        <Route path='/authors/:id' component={AuthorDetails} />                                                          
        <Route path='/contacts' render={props => (
            <div>
                <h2>Contacts</h2>
                <div>
                    <address>BG, Sofia 1510 'Georgi Iliev' str.</address>
                    <address>Phone: 0889 123 321</address>
                </div>
            </div>
        )} />
        <Route component={NotFoundPage} />
    </Switch>
)

export default Routes