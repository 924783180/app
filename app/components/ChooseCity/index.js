import React, {Component} from 'react';
import './index.less';
export  default class ChooseCity extends Component {
    render() {
        return (
            <div className="choose-city">
                <h3>选择城市</h3>
                <ul>
                    <li onClick={this.changeCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.changeCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.changeCity.bind(this,'深圳')}>深圳</li>
                    <li onClick={this.changeCity.bind(this,'广州')}>广州</li>
                    <li onClick={this.changeCity.bind(this,'香港')}>香港</li>
                    <li onClick={this.changeCity.bind(this,'哈尔滨')}>哈尔滨</li>
                    <li onClick={this.changeCity.bind(this,'呼和浩特')}>呼和浩特</li>
                    <li onClick={this.changeCity.bind(this,'河北')}>河北</li>
                    <li onClick={this.changeCity.bind(this,'河南')}>河南</li>
                    <li onClick={this.changeCity.bind(this,'湖北')}>湖北</li>
                    <li onClick={this.changeCity.bind(this,'湖南')}>湖南</li>
                    <li onClick={this.changeCity.bind(this,'山东')}>山东</li>
                </ul>
            </div>
        )
    }
    changeCity(city){
        this.props.choose(city)
    }
}