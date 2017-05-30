import React, {Component} from 'react';
import './index.less';
export  default class ListItem extends Component {
    render() {
        let {img,title,subTitle,price,distance,mumber}=this.props.data;
        return (
            <div className="list-item">
                <div className="img"><img src={img}/></div>
                <div className="list-content">
                    <h3>{title}</h3>
                    <h4>{subTitle}</h4>
                    <div className="list-count">
                        <strong>${price}</strong>
                        <span>已售{mumber}</span>
                    </div>
                    <span className="distance">{distance}</span>
                </div>
            </div>
        )
    }
}
