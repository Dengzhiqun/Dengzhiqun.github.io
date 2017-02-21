// 创建TODOITEM组件
var React = require('react');
require('./css/todoItem.css');
var TodoItem = React.createClass({
    render: function () {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },
    handleDelete: function () {
        // 回调函数,回到TODOCOMPONENET组件中
        this.props.onDelete(this.props.item);
    }
});
module.exports = TodoItem;