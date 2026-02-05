import { HelloWorld } from '@/registry/foliokit/hello-world'

const HelloWorldDemo = () => {
  return (
    <div className="flex items-center justify-center">
      <HelloWorld/>
      <div className="ml-4">
        <p className="text-lg font-bold">Hello World</p>
      </div>
    </div>
  )
}

export default HelloWorldDemo
