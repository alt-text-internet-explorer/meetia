import React from "react"
import Link from "next/link"
import CollectionsGallery from "@/components/collections/Collections"

const Collections = async ({ params }) => {

  const { id } = await params;

  return (
    <div>
      <CollectionsGallery id={id}/>
    </div>
  )
}

export default Collections
