import React, {Component} from 'react';
import './index.less';
export  default class HeaderComponent extends Component {
    render() {
        return (
            <div className="header-component">
                <i className="iconfont icon-unfold" onClick={this.back}></i>
                {this.props.title}
            </div>
        )
    }
    back(){
        window.history.back();
    }
}
