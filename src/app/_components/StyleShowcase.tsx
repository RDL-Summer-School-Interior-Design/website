'use client'

import Image from 'next/image'
import { useState } from 'react'

const styles = [
  {
    name: 'Modern',
    description: 'Characterized by clean lines, simple color palettes, and the use of materials like glass, metal, and steel. It often incorporates open floor plans and minimalistic design.',
    keywords: ['Clean lines', 'Minimalist', 'Open floor plan', 'Metal and glass'],
    image: '/modern.jpg'
  },
  {
    name: 'Industrial',
    description: 'Inspired by warehouses and urban lofts, it features raw materials like exposed brick, metal, and wood. It often has an open floor plan and somewhat unfinished, rugged look.',
    keywords: ['Urban loft', 'Raw materials', 'Exposed brick', 'Unfinished look'],
    image: '/industrial.jpg'
  },
  {
    name: 'Scandinavian',
    description: 'Emphasizes simplicity, functionality, and coziness. It often uses natural materials, light colors, and clean lines to create a serene and inviting space.',
    keywords: ['Cozy', 'Simplicity', 'Functionality', 'Natural materials'],
    image: '/scandinavian.jpg'
  },
  {
    name: 'Traditional',
    description: 'Inspired by 18th and 19th-century European decor, it features rich colors, ornate details, and classic furnishings. It often includes elements like wood paneling, antique pieces, and elegant fabrics.',
    keywords: ['Classic', 'Rich colors', 'Antique pieces', 'Elegant fabrics'],
    image: '/traditional.jpg'
  },
]

export default function StyleShowcase() {
  const [copiedText, setCopiedText] = useState('')
  const [highlightedKeywords, setHighlightedKeywords] = useState<string[]>([])

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(''), 2000)
  }

  const handleKeywordsMouseEnter = (keywords: string[]) => {
    setHighlightedKeywords(keywords)
  }

  const handleKeywordsMouseLeave = () => {
    setHighlightedKeywords([])
  }

  const copyKeywords = async (keywords: string[]) => {
    const keywordsText = keywords.join(',')
    await copyToClipboard(keywordsText)
  }

  return (
    <div className="space-y-8">
      {styles.map((style) => (
        <div key={style.name} className="bg-white rounded-lg shadow-md p-6 flex">
          <div className="flex-1 pr-6">
            <h2 className="text-2xl font-bold mb-2">{style.name}</h2>
            <div className="relative">
              <p className="text-gray-600 mb-4">
                {style.description}
                <button
                  onClick={() => copyToClipboard(style.description)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </p>
            </div>
            <div 
              className="flex flex-wrap items-center gap-2 mb-4"
              onMouseEnter={() => handleKeywordsMouseEnter(style.keywords)}
              onMouseLeave={handleKeywordsMouseLeave}
            >
              {style.keywords.map((keyword) => (
                <span 
                  key={keyword} 
                  className={`px-2 py-1 rounded-full text-sm cursor-pointer transition-colors duration-200 ${
                    highlightedKeywords.includes(keyword) ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'
                  }`}
                  onClick={() => copyKeywords(style.keywords)}
                  title="Click to copy all keywords"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={style.image}
              alt={`${style.name} interior design`}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
      {copiedText && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
          Copied to clipboard!
        </div>
      )}
    </div>
  )
}
