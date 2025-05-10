import { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/properties')
        const data = await response.json()
        setProperties(data)
      } catch (error) {
        console.error('Error fetching properties:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  return (
    <div className="container mx-auto p-6 grid grid-cols-3 gap-3">
      {!loading && properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  )
}
