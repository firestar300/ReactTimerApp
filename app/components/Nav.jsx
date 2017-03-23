var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">React Timer</li>
          <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
          <li><Link to="/countdown" activeClassName="active">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            By <a href="https://github.com/firestar300" target="_blank">Milan Ricoul</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
