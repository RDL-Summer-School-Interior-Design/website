export default function ImageGenerationForm() {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex space-x-8">
          <div className="flex-1">
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">
                Interior Design Style
              </label>
              <input
                type="text"
                id="style"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                Character Key Words
              </label>
              <input
                type="text"
                id="keywords"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Generate Image
              </button>
              <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Partial regenerate
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <img src="/whole_room.jpg" alt="Large generated image" className="w-full h-64 object-cover rounded-md" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src="/carpet.jpg" alt="Small generated image 1" className="w-full h-24 object-cover rounded-md" />
              <img src="/sofa.jpg" alt="Small generated image 2" className="w-full h-24 object-cover rounded-md" />
              <img src="/plant.jpg" alt="Small generated image 3" className="w-full h-24 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
