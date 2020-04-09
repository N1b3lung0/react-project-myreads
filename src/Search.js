import React, { Component } from 'react'

class Search extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    render() {
        const { query } = this.state
        return (
            <div className="search-books-bar">
                <input
                    type='text'
                    placeholder='Search Books'
                    value={ query }
                    onChange={ (event) => this.updateQuery(event.target.value) }
                />
                { /* JSON.stringify(query) */ }
            </div> 
        )
    }
}

export default Search