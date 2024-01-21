import React, {  } from 'react';
import RouteContainer from '../components/RouteContainer';

import GetStartedPage from '../pages/GetStartedPage';
import HomePage from '../pages/HomePage';
import TradesPage from '../pages/TradesPage';
import LabsPage from '../pages/LabsPage';
import ArticlesPage from '../pages/ArticlesPage';
import ProfilePage from '../pages/ProfilePage';

import { Routes, Route } from "react-router-dom"


const Router = (props) => {
    return(
        <Routes>
            {/* Protected */}

            <Route path="/" element={ 
                <RouteContainer><HomePage /></RouteContainer> 
            } />

            <Route path="trades" element={ 
                <RouteContainer><TradesPage /></RouteContainer> 
            } />

            <Route path="labs" element={ 
                <RouteContainer><LabsPage /></RouteContainer> 
            } />

            <Route path="articles" element={ 
                <RouteContainer><ArticlesPage /></RouteContainer> 
            } />

            <Route path="profile" element={ 
                <RouteContainer><ProfilePage /></RouteContainer> 
            } />

            {/* Unprotected */}
            <Route path="get-started" element={ <GetStartedPage/> } />
            
        </Routes>
    );
}


export default Router;