var React = require('react');
var AddItem = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.handleSubmit} id='add-todo'>
                <input type="text" ref="newItem"/>
                <input type="submit" value='hitme'/>
            </form>
        )
    },
    handleSubmit: function (e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});
module.exports = AddItem;