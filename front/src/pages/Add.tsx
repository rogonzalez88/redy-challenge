import React, { useState } from 'react';

export default function Home() {

  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'Apartment',
    price: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    yearBuilt: '',
    amenities: '',
    images: '',
    status: 'Available',
    longitude: '',
    latitude: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      ...form,
      price: parseFloat(form.price),
      bedrooms: parseInt(form.bedrooms),
      bathrooms: parseInt(form.bathrooms),
      squareFeet: parseInt(form.squareFeet),
      yearBuilt: parseInt(form.yearBuilt),
      amenities: form.amenities.split(',').map(a => a.trim()),
      images: form.images.split(',').map(i => i.trim()),
      location: {
        type: 'Point',
        coordinates: [parseFloat(form.longitude), parseFloat(form.latitude)]
      }
    };

    const res = await fetch('http://localhost:4000/api/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (res.ok) {
      setForm({ ...form, title: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold">Add Property</h2>

      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />

      <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border rounded">
        <option>Apartment</option>
        <option>House</option>
        <option>Condo</option>
        <option>Land</option>
        <option>Commercial</option>
      </select>

      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="street" placeholder="Street" value={form.street} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="zipCode" placeholder="ZIP Code" value={form.zipCode} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="country" placeholder="Country" value={form.country} onChange={handleChange} className="w-full p-2 border rounded" />

      <input name="longitude" placeholder="Longitude" value={form.longitude} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="latitude" placeholder="Latitude" value={form.latitude} onChange={handleChange} className="w-full p-2 border rounded" />

      <input name="bedrooms" type="number" placeholder="Bedrooms" value={form.bedrooms} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="bathrooms" type="number" placeholder="Bathrooms" value={form.bathrooms} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="squareFeet" type="number" placeholder="Square Feet" value={form.squareFeet} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="yearBuilt" type="number" placeholder="Year Built" value={form.yearBuilt} onChange={handleChange} className="w-full p-2 border rounded" />

      <input name="amenities" placeholder="Amenities (comma-separated)" value={form.amenities} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="images" placeholder="Image URLs (comma-separated)" value={form.images} onChange={handleChange} className="w-full p-2 border rounded" />

      <select name="status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded">
        <option>Available</option>
        <option>Sold</option>
        <option>Pending</option>
        <option>Rented</option>
      </select>

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Submit Property
      </button>
    </form>
  );
}
