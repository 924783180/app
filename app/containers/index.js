import React,{Component} from 'react';
import RouterMap from '../routers';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userInfo'
class App extends Component{
    constructor(){
        super();
        this.state={
            loading:false
        }
    }
    componentDidMount(){
            this.setState({
                loading:true
            });
        let cityName=localStorage.getItem('cityName');
        cityName=cityName==undefined?'上海':void 0;
        this.props.actions.update({
            cityName
        });
    }
    render(){
        return (
            <div>
                {this.state.loading?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
}
export default connect(state=>{
    return {}
    },
    dispatch=>{
        return {
            actions:bindActionCreators(actions,dispatch)
        }
    })(App);