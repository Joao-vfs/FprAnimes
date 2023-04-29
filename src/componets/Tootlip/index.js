import React, { useState } from 'react'

import { ToolTipContainer, TooltipContent } from './styles'

import { ImHeart, ImStarFull } from "react-icons/im";

export default function Tooltip({
  title,
  averageRating,
  popularityRank,
  ratingRank,
  description,
  children,
}) {

  const [isVisible, setIsVisible ] = useState(false)

  return (

    <ToolTipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >

      {children}

      {isVisible && (
        <TooltipContent>

          <h3>{title}</h3>
          <p className='rating'>{averageRating}%</p>
          <p className='pop'><ImHeart className="heart" /> #{popularityRank} Melhor Popular</p>
          <p className='rank'><ImStarFull className="star" /> #{ratingRank} Melhor Classificado</p>
          <span>{description}</span>

        </TooltipContent>

      )}
      
    </ToolTipContainer>
  )
}
