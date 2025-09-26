import React from 'react'
import type { MovieUpcoming } from '../../services/upcoming/type'
import Card from '../card'

interface Props {
  upcoming: MovieUpcoming
}

const Upcoming = ({ upcoming }: Props) => {
  const { title, poster_path, release_date } = upcoming;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
  return (
    <Card color="#FFFFFF" borderRadius="10px" width="200px">
      <div className='flex flex-col items-center'>
        {poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <img
          src="/fallback.jpg"
          alt="No poster available"
          className="w-full h-full object-cover rounded-md"
          />
        )}
        <p className="text-gray-950 mt-2 font-poppins p-0.5">{title}</p>
        <p className="text-gray-950 mt-2 font-poppins p-0.5">{release_date}</p>
      </div>
    </Card>
  )
}

export default Upcoming