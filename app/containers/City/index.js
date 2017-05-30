import React, {Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import CurrentCity from '../../components/CurrentCity';
import ChooseCity from '../../components/ChooseCity';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/userInfo';
class City extends Component {
    render() {
        return (
            <div>
                <HeaderComponent title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <ChooseCity choose={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(cityName){
        this.props.actions.update({
            cityName
        });
        this.props.history.push('/');
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo
        }
    },
    dispatch=>{
        return {
            actions:bindActionCreators(actions,dispatch)
        }
    }
)(City)