import React from 'react';

import NavLink from './components/NavLink'

class AppRoot extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top" style={{marginBottom: '0px'}}>
                    <div className="container">
                        <div className="navbar-inner">
                            <NavLink to="/" className="navbar-brand">RE18</NavLink>

                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li><NavLink to="/setList">SetList</NavLink></li>
                                    <li><NavLink to="/combi">Combi</NavLink></li>
                                    <li><NavLink to="/program">Program</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppRoot;
