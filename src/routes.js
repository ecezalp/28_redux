import React from 'react';
import {Route} from 'react-router'

import App from './components/app';
import CatsIndex from './components/cats_index'
import CatsShow from './components/cats_show'
import CatNew from './components/cat_new'

export default (
    <Route path="/" component={App} >
        <Route path="/cats" component={ CatsIndex } >
             <Route path="/cats/new" component={ CatNew } />
             <Route path="/cats/:id" component={ CatsShow } />
         </Route >
    </Route >
)

