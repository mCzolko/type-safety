import { useEffect, useState } from 'react'
import { Data } from '@/pages/api/profile'


async function getProfile(): Promise<Data> {
  const profileResponse = await fetch('/api/profile')
  if (!profileResponse.ok) {
    throw new Error('Failed to fetch data')
  }
  return profileResponse.json()
}


export default function Profile({ initProfile }: { initProfile?: Data }) {
  const [ profile, setProfile ] = useState<Data>(initProfile)

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
    initProfile: {
      name: 'Nemam',
      bio: 'Lorem ipsum dolor sit amet'
    }
  }
})
