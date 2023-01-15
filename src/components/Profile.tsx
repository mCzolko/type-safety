import { useProfile } from '@/hooks/useProfile'


const Profile = () => {
  const { data: profile } = useProfile()

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


export default Profile
