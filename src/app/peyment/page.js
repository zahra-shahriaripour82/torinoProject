"use client"
import Peyment from "@/components/templates/peyment/page"
import { useSearchParams } from 'next/navigation'

function PeymentPage() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('status')
  console.log(search);
  
  return (
    <Peyment params={search}/>
  )
}

export default PeymentPage