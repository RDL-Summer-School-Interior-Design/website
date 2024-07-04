'use client'

import { useState } from 'react';

export default function ImageGenerationForm() {
  const [highlightedImage, setHighlightedImage] = useState<number | null>(null);

  const handleHotspotHover = (index: number) => {
    setHighlightedImage(index);
  };

  const handleHotspotLeave = () => {
    setHighlightedImage(null);
  };

  const handleHotspotClick = (index: number) => {
    const links = [
      'https://www.ikea.cn/cn/zh/p/vestervig-wa-te-wei-ping-zhi-di-tan-shou-gong-zhi-zuo-duo-se-zuan-shi-tu-an-20521259/', 
      'https://www.ikea.cn/cn/zh/p/esseboda-ai-si-bo-da-san-ren-sha-fa-ta-mi-la-lan-se-he-se-s59443500/', 
      'https://www.ikea.cn/cn/zh/p/fejka-fei-qia-ren-zao-pen-zai-zhi-wu-shi-nei-hu-wai-chui-zhi-wu-hua-guo-00491574/'
    ];
    window.open(links[index], '_blank');
  };

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
            <div className="mb-4 relative">
              <img src="/whole_room.jpg" alt="Large generated image" className="w-full h-64 object-cover rounded-md" />
              <div 
                className={`absolute bottom-2 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full cursor-pointer transition-all duration-300 ${highlightedImage === 0 ? 'ring-4 ring-amber-200' : ''} shadow-md`}
                onMouseEnter={() => handleHotspotHover(0)}
                onMouseLeave={handleHotspotLeave}
                onClick={() => handleHotspotClick(0)}
              ></div>
              <div 
                className={`absolute top-1/2 left-5 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full cursor-pointer transition-all duration-300 ${highlightedImage === 2 ? 'ring-4 ring-amber-200' : ''} shadow-md`}
                onMouseEnter={() => handleHotspotHover(2)}
                onMouseLeave={handleHotspotLeave}
                onClick={() => handleHotspotClick(2)}
              ></div>
              <div 
                className={`absolute top-3/4 right-10 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full cursor-pointer transition-all duration-300 ${highlightedImage === 1 ? 'ring-4 ring-amber-200' : ''} shadow-md`}
                onMouseEnter={() => handleHotspotHover(1)}
                onMouseLeave={handleHotspotLeave}
                onClick={() => handleHotspotClick(1)}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="/carpet.jpg" 
                alt="Small generated image 1" 
                className={`w-full h-24 object-cover rounded-md transition-all duration-300 ${highlightedImage === 0 ? 'ring-4 ring-amber-200' : ''} cursor-pointer`} 
                onMouseEnter={() => handleHotspotHover(0)}
                onMouseLeave={handleHotspotLeave}
                onClick={() => handleHotspotClick(0)}
              />
              <img 
                src="/sofa.jpg" 
                alt="Small generated image 2" 
                className={`w-full h-24 object-cover rounded-md transition-all duration-300 ${highlightedImage === 1 ? 'ring-4 ring-amber-200' : ''} cursor-pointer`} 
                onMouseEnter={() => handleHotspotHover(1)}
                onMouseLeave={handleHotspotLeave}
                onClick={() => handleHotspotClick(1)}
              />
              <img 
                src="/plant.jpg" 
                alt="Small generated image 3" 
                className={`w-full h-24 object-cover rounded-md transition-all duration-300 ${highlightedImage === 2 ? 'ring-4 ring-amber-200' : ''} cursor-pointer`} 
                onMouseEnter={() => handleHotspotHover(2)}
                onMouseLeave={handleHotspotLeave}
                onClick={() => handleHotspotClick(2)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
