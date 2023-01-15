import { useEffect, useState } from 'react'
import profile, { Profile } from '@/pages/services/profile'


async function getProfile(): Promise<Profile> {
  const profileResponse = await fetch('/api/profile')
  if (!profileResponse.ok) {
    throw new Error('Failed to fetch data')
  }
  return profileResponse.json()
}


export default function ProfilePage({ initProfile }: { initProfile?: Profile }) {
  const [ profile, setProfile ] = useState<Profile>(initProfile)

  useEffect(() => {
    getProfile().then(setProfile)
  }, [])

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>{profile.name}</div>
      <div>{profile.bio}</div>
    </div>
  )
}


export const getServerSideProps = async () => ({
  props: {
    initProfile: await profile()
  }
})
