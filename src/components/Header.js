import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <div >
                <h1 className="display-3">Recipe Logbook</h1>
                <div className="btn-group">
                    <div>
                        <Link to='/recipes'>Home</Link> |
                        <Link to="/recipes/new"> New Recipe</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header