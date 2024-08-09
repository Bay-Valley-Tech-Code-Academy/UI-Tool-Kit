import Box from "@/components/Box/box"
export default function Blog() {

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Blog
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Blog Section Description here
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        {Box(itemData)}
      </div>
    </div>
  </div>
  )
}

const itemData = [
  {
    title: `Hello world`,
    description: 'Hello Kitty World',
    button: 'Read more',
    p: 'hello world'
  },
  {
    title: `Hello world`,
    description: 'Hello Kitty World',
    button: 'Read more',
    p: 'hello world'
  },
  {
    title: `Hello world`,
    description: 'Hello Kitty World',
    button: 'Read more',
    p: 'hello world'
  },
  {
    title: `Hello world`,
    description: 'Hello Kitty World',
    button: 'Read more',
    p: 'hello world'
  },
  
]
