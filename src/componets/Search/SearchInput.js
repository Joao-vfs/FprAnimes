import React from 'react'

import { Busca } from './styles'



const SearchInput = ({ OnChange, value }) => {

    function handleChange(event) {
        OnChange(event.target.value)
    }

    return (
        <div>
            <Busca type='search' value={value} OnChange={handleChange} placeholder='Buscar' />
        </div>
    )
}


export default SearchInput  