import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
export  default class Slider extends Component {
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render() {
        let opts={
            continuous: true,
            auto:1000,
            callback:(index)=>{
                this.setState({
                    index
                })
            }
        };
        return (
            <div>
                <div className="swiper">
                    <ReactSwipe className="carousel" swipeOptions={opts}>
                        <div>
                            <ul>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                                <li>
                                    <i className="iconfont icon-collection"></i>
                                    景点
                                </li>
                            </ul>
                        </div>
                    </ReactSwipe>
                </div>
                <ul className="doted">
                    <li className={this.state.index==0?"active":''}></li>
                    <li className={this.state.index==1?"active":''}></li>
                    <li className={this.state.index==2?"active":''}></li>
                </ul>
            </div>

        )
    }
}
