import { useEffect, useState } from 'react'
import { getUpcoming, type MovieUpcoming } from '../../services/upcoming'

const useUpcoming = () => {
    const [upcomingMovie, setUpcomingMovie] = useState<MovieUpcoming[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUpcoming()

                if (response) {
                    setUpcomingMovie(response?.results)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [])
  return {
    upcomingMovie
  }
}

export default useUpcoming