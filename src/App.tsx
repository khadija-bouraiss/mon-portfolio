import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Mon Portfolio</h1>
      <div className="flex gap-2">
        <Badge>React</Badge>
        <Badge>TypeScript</Badge>
        <Badge>Tailwind</Badge>
      </div>
      <Card className="w-64">
        <CardHeader>
          <CardTitle>shadcn fonctionne !</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Cliquez ici</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
