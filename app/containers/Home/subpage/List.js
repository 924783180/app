import React, {Component} from 'react';
import {getList} from '../../../fetch/home';
import ListItem from '../../../components/ListItem'
import LoadMore from '../../../components/LoadMore'
export  default class List extends Component {
    constructor(){
        super();
        this.state={
            hasMore:true,
            data:[],
            index:0,
            isLoading:true
        }
    }
    render() {
        return (
            <div>
                {this.state.data.length?this.state.data.map((item,index)=>(
                    <ListItem data={item} key={index}/>
                )):<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} loadMoreFn={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,this.state.index))
    }
    processData(result){
        result.then(res=>res.json()).then(({data,hasMore})=>{
            this.setState({
                data:[...this.state.data,...data],
                hasMore,
                isLoading:false
            });
        });
    }
    loadMore(){
        this.setState({
            index:this.state.index+1,
            isLoading:true
        },()=>{
            this.processData(getList(this.props.cityName,this.state.index))
        });
    }
}
