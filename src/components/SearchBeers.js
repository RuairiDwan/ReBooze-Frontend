import React, { Component } from 'react';

export class SearchBeers extends Component {
    render() {
        console.log(this.props.header)
        return (
            <form style= {{ display:'flex'}}>
                <input 
                type='text'
                name='title'
                style={{flex: '8'}}
                placeholder= 'Search Beer/Brewery...'
                />
                <input 
                type="submit"
                value='Search'
                className='btn'
                style={{flex: 2}}
                />
            </form>
        );
    }
}

export default SearchBeers;