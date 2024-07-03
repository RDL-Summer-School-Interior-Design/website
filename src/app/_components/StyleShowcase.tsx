import Image from 'next/image'

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
  return (
    <div className="space-y-8">
      {styles.map((style) => (
        <div key={style.name} className="bg-white rounded-lg shadow-md p-6 flex">
          <div className="flex-1 pr-6">
            <h2 className="text-2xl font-bold mb-2">{style.name}</h2>
            <p className="text-gray-600 mb-4">{style.description}</p>
            <div className="flex flex-col items-end gap-2 mb-4">
              {style.keywords.map((keyword) => (
                <span key={keyword} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
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
    </div>
  )
}
