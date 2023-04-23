import React from 'react'

import { Box } from './styles'
import { Link } from 'react-router-dom'

import banner from '../../img/banner.png'

import logo from '../../img/logo (2).png'

export default function Home() {


    return (
        <Box>
            <img src={banner} />
            <h1>Oie</h1>
        </Box>
    )
}
