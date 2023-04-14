import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { Cabecalho } from './styles'

import logo from '../../img/logo (2).png'

import SearchInput from '../Search/SearchInput.js'

export default function Header() {

    const [info, setInfo] =useState({})
    const[text, setText] = useState('');
    

    useEffect(() => {
        if (text) {
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
            .then((response) => response.json())
            .then((response) => console.log(response))
        } 
    },[text]);

    return (
        <Cabecalho>
                <Link to={'/'}><img src={logo}/></Link>
                <SearchInput onChange={(e) => setText(e.event.target)}/>
                {info.data && (
                    <ul>
                        {info.data.map( (anime) => (
                                <li key={anime.id}>
                                    {anime.attributes.canonicoTitle}
                                </li>
                            
                        ))}
                    </ul>
                )} 

        </Cabecalho>
    )
}