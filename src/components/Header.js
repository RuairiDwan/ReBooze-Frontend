import React, { Component } from 'react';

export class Header extends Component {
    render() {
        console.log(this.props.header)
        return (
            <div style={{display:'flex'}}>
                <h2 style={{flex: '5'}}>
                    Craft Beer Review Website
                </h2>
                <navbar></navbar>
            
            </div>
        );
    }
}
function Navbar(){
    return(
        <nav className='navbar'> 
<ul className='navbar-nav'>
</ul>
        </nav>
    )
}

export default Header;