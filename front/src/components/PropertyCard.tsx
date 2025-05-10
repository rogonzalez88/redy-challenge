interface Props {
  _id: string
  description: string
  images: [string]
  price: string
  state: string
}

export default function PropertyCard({ images, description, state, price }: Props) {
  return (
    <article className='article bg-white shadow-md rounded-lg overflow-hidden'>
      <img src={images[0]} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{description}</h2>
        <p className="text-sm text-gray-600">{state}</p>
        <p className="text-blue-600 font-bold mt-2">{price}</p>
      </div>
    </article>
  )
}
