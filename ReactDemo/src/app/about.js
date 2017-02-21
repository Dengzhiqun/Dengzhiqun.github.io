var React = require('react');
import {Link} from "react-router";
var About = React.createClass({
    render:function () {
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h2>BJH161013</h2>
            </div>
        )
    }
})
module.exports = About;