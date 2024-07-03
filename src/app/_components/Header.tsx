// import Image from 'next/image'

export default function Header() {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-2">CUBOID AI</h1>
      <p className="text-xl text-gray-600 mb-4">AI Powered Interior Design</p>
      {/* <div className="flex justify-center space-x-2">
        {['and-dev', 'firebase', 'openai', 'replicate'].map((icon) => (
          <Image
            key={icon}
            src={`/${icon}-icon.png`}
            alt={`${icon} icon`}
            width={24}
            height={24}
          />
        ))}
      </div> */}
    </header>
  )
}