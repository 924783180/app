import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';
export  default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header">
                <Link to="/city" className="city">
                    <div>
                        {this.props.cityHeader}
                        <i className="iconfont icon-unfold"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <i className="iconfont icon-people_fill"></i>
                </div>
            </div>
        )
    }
}