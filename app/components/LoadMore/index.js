import React, {Component} from 'react';
import './index.less';
export  default class LoadMore extends Component {
    render() {
        return (
            <div className="load-more">
                {this.props.hasMore?
                <div ref="more" onClick={this.loadMore.bind(this)}>点击加载更多</div>:
                <div>我是有底线的</div>
                }
            </div>
        )
    }
    loadMore(){
        if(this.props.isLoading){
            return;
        }
        this.props.loadMoreFn();
    }
    componentDidMount(){
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                if(this.props.isLoading){
                    return;
                }
                let screen=window.screen.height;
                let top=this.refs.more.getBoundingClientRect().top;
                if(top<screen){
                    this.props.loadMoreFn();
                }
            },50);
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillMount(){
        window.removeEventListener('scroll',this.fn)
    }
}
