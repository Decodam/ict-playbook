import React, {  } from 'react';
import '../styles/RouteContainer.css';
import Avatar from '@mui/material/Avatar';
import HomeRoundedIcon from '@mui/icons-material/Home';
import LayersRoundedIcon from '@mui/icons-material/Layers';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const RouteContainer = (props) => {
    return(
        <div id='routeContainer'>
            <div className="sidebar">
                <Link to="/">
                    <Avatar src={logo} alt="ICT PLAYBOOK" className="sidebar_logo" sx={{ width: 50, height: 50 }} />
                </Link>

                <div className="sidebar_list">
                    <Link to="/">
                        <Tooltip placement="right" title="Home">
                            <div className={window.location.pathname === '/' ? "sidebar_list__item active_tab" : "sidebar_list__item"}><HomeRoundedIcon /></div>
                        </Tooltip>              
                    </Link>
                    
                    <Link to="/trades">
                        <Tooltip placement="right" title="Trades">
                            <div className={window.location.pathname === '/trades' ? "sidebar_list__item active_tab" : "sidebar_list__item"}><LayersRoundedIcon /></div>
                        </Tooltip>
                    </Link>

                    <Link to="/labs">
                        <Tooltip placement="right" title="ICT Labs">
                            <div className={window.location.pathname === '/labs' ? "sidebar_list__item active_tab" : "sidebar_list__item"}><ScienceRoundedIcon /></div>
                        </Tooltip>
                    </Link>

                    <Link to="/articles">
                        <Tooltip placement="right" title="Articles">
                            <div className={window.location.pathname === '/articles' ? "sidebar_list__item active_tab" : "sidebar_list__item"}><ArticleRoundedIcon /></div>
                        </Tooltip>
                    </Link>
                </div>


                <Link to="/profile">
                    <Tooltip placement="right" title="Profile">
                        <div className="sidebar_profile">
                            <Avatar src="https://mighty.tools/mockmind-api/content/human/57.jpg"  alt="USERNAME" className="sidebar_profile__pic" />
                        </div>
                    </Tooltip>
                </Link>
            </div>
            <div className="content">
                <div className="container">{props.children}</div>
            </div>
        </div>
    );
}


export default RouteContainer;