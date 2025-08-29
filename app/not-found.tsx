import CornerElements from '@/components/CornerElements'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
     <div className="relative backdrop-blur-sm border border-border rounded-lg p-10 text-center">
      <CornerElements />

      <h2 className="text-2xl font-bold mb-4 font-mono uppercase">
        <span className="text-primary">Not</span> found!
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        This page is not created yet. 
      </p>
      
      <Button
        size="lg"
        asChild
        className="relative overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
      >
        <Link href="/">
          <span className="relative flex items-center">
            Home Page
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </span>
        </Link>
      </Button>
    </div>
  )
}