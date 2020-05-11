import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

//Link tag results in an anchor tag being rendered in the browser but ReactRouter
//  prevents the browser from navigating to a new page and fetching a new HTML file
//  so that you don't lose any of your React data.  This is a Single Page App (SPA);
//  only 1 html page.  User is not really navigating to a new page.

const App=() => {

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};


export default App;

// Two other routers: HashRouter and MemoryRouter.  These routers are geared toward deployment.

// HashRouter adds a hash tag into the URL after the domain.  Server would be configured to not
//  look at anything past the hash in the URL.  So it would return the index.html.  And then the
//  React client would look at the URL after the hash to decide what to show the user.  This
//  type of Router in the React client does not require any special set up on a production server.

// MemoryRouter does not update the URL.

// With the React BrowserRouter, our React server does not find the dev resourses and the public
//  resources looking for the URL route we specified.  It does not locate the route and so just
//  returns the index.html file.  This loads the javascript bundle file into the browser and
//  so the React framework can look at the JS code and find the route defined in the App component.
//  So if you deploy the app with the BrowserRouter to an outside server, you need to configure it
//  so it knows to return the index.html file instead of a 404.