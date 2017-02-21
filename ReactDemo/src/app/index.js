// 引入模块
var React = require('react');
var ReactDOM = require('react-dom');
//引入react-router中的Router&Route ES2015/ES6
var About = require('./about');
import {Route,Router,browserHistory,Link} from "react-router";
var App = React.createClass({
    render:function () {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        )
    }
})

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
require('./css/index.css');
// 1.通过REACT创建组件
var TodoComponent = React.createClass({
    getInitialState:function () {
        return {
            todos: ['BJH1013','你们就快要毕业了~','加油Fighting~~',"hello","everybody"]
        }
    },
    render: function () {
        var todos = this.state.todos;

        todos = todos.map(function (item,index) {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            // 只能有一个根标签
            <div>
                <Link to={'/about'}>About</Link>
                <p onClick={this.clicked}>今天辛辛苦苦,明天幸幸福福~:D</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    },

    onDelete: function (item) {
        var updateTodos = this.state.todos.filter(function (val,index) {
            return item !== val;
        });

        this.setState({
            todos: updateTodos
        });
    },
    onAdd:function (item) {
        var updateTodos = this.state.todos;
        updateTodos.push(item);
        this.setState({
            todos : updateTodos
        })
    }

});

// 2.通过RENDERDOM将组件放入INDEX.hTml中
ReactDOM.render(<App />,document.getElementById('todo-wrapper'));