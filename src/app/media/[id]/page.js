import React from "react"
import Link from "next/link"
import MediaGallery from "@/components/media/Media"

const Profile = async ({ params }) => {
  
  const { id } = await params;

  return (
    <div>
      <MediaGallery id={id} />
    </div>
  )
}

export default Profile
