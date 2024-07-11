'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageGenerationForm() {
  const [highlightedImage, setHighlightedImage] = useState<number | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [budget, setBudget] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const prices = ['¥1,299', '¥3,999', '¥49'];

  const handleKeywordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.endsWith(',')) {
      const newKeyword = value.trim().replace(/,$/, '');
      if (newKeyword && !keywords.includes(newKeyword)) {
        setKeywords([...keywords, newKeyword]);
        setInputValue('');
      }
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
  };

  const handleGenerateImage = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowImages(true);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [keywords]);

  const styleShowcases = [
    {
      name: "Modern Minimalist",
      description: "Clean lines, neutral colors, and minimalist decor",
      keywords: ["modern", "minimalist", "clean", "neutral"],
      image: "/modern.jpg"
    },
    {
      name: "Scandinavian Cozy",
      description: "Light woods, hygge elements, and functional design",
      keywords: ["scandinavian", "cozy", "hygge", "functional"],
      image: "/scandinavian.jpg"
    },
    {
      name: "Industrial Chic",
      description: "Raw materials, exposed elements, and urban aesthetics",
      keywords: ["industrial", "chic", "urban", "raw"],
      image: "/industrial.jpg"
    }
  ];

  const handleStyleSelect = async (style: typeof styleShowcases[0]) => {
    setDescription(style.description);
    setKeywords(style.keywords);
    setSelectedStyle(style.name);
    setBudget('6000');
    setUploadedImage('/basic.jpg');
    
    // Set the file input value to basic.jpg
    if (fileInputRef.current) {
      const dataTransfer = new DataTransfer();
      await fetch('/basic.jpg')
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], 'basic.jpg', { type: 'image/jpeg' });
          dataTransfer.items.add(file);
          fileInputRef.current!.files = dataTransfer.files;
        });
    }
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">
                Interior Design Style
              </label>
              <select
                id="style"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a style</option>
                {styleShowcases.map((style, index) => (
                  <option key={index} value={style.name}>{style.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget
              </label>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={handleBudgetChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your budget"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                id="fileUpload"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                Character Key Words
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {keywords.map((keyword, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {keyword}
                    <button onClick={() => removeKeyword(keyword)} className="ml-1 text-blue-600 hover:text-blue-800">
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                id="keywords"
                ref={inputRef}
                value={inputValue}
                onChange={handleKeywordInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a keyword and press ',' to add"
              />
            </div>
            <div className="flex space-x-2">
              <button 
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleGenerateImage}
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Image'}
              </button>
            </div>
          </div>
          {showImages && (
            <div className="flex-1">
              <div className="mb-4 relative">
                <Image src="/whole_room.jpg" alt="Large generated image" width={600} height={400} className="w-full h-64 object-cover rounded-md" />
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
                <div className="flex flex-col items-center">
                  <Image 
                    src="/carpet.jpg" 
                    alt="Small generated image 1" 
                    width={200}
                    height={150}
                    className={`w-full h-24 object-cover rounded-md transition-all duration-300 ${highlightedImage === 0 ? 'ring-4 ring-amber-200' : ''} cursor-pointer`} 
                    onMouseEnter={() => handleHotspotHover(0)}
                    onMouseLeave={handleHotspotLeave}
                    onClick={() => handleHotspotClick(0)}
                  />
                  <span className="mt-2 text-sm font-medium text-gray-700">{prices[0]}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="/sofa.jpg" 
                    alt="Small generated image 2" 
                    width={200}
                    height={150}
                    className={`w-full h-24 object-cover rounded-md transition-all duration-300 ${highlightedImage === 1 ? 'ring-4 ring-amber-200' : ''} cursor-pointer`} 
                    onMouseEnter={() => handleHotspotHover(1)}
                    onMouseLeave={handleHotspotLeave}
                    onClick={() => handleHotspotClick(1)}
                  />
                  <span className="mt-2 text-sm font-medium text-gray-700">{prices[1]}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image 
                    src="/plant.jpg" 
                    alt="Small generated image 3" 
                    width={200}
                    height={150}
                    className={`w-full h-24 object-cover rounded-md transition-all duration-300 ${highlightedImage === 2 ? 'ring-4 ring-amber-200' : ''} cursor-pointer`} 
                    onMouseEnter={() => handleHotspotHover(2)}
                    onMouseLeave={handleHotspotLeave}
                    onClick={() => handleHotspotClick(2)}
                  />
                  <span className="mt-2 text-sm font-medium text-gray-700">{prices[2]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Style Showcases</h2>
          <div className="grid grid-cols-3 gap-4">
            {styleShowcases.map((style, index) => (
              <div key={index} className="border rounded-lg p-4">
                <Image src={style.image} alt={style.name} width={200} height={150} className="w-full h-32 object-cover rounded-md mb-2" />
                <h3 className="font-semibold mb-1">{style.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{style.description}</p>
                <button
                  onClick={() => handleStyleSelect(style)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
                >
                  Use This Style
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
