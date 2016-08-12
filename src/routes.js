import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/home/Home';
import AboutPage from './components/about/About';
import SearchPage from './components/search/Search';
import CoursePage from './components/course/course';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="search" component={SearchPage}/>
    <Route path="courses" component={CoursePage} />

    <Route path="training" component={CoursePage}>
      <Route path="mandatory" component={SearchPage}/>
    </Route>
  </Route>
);
