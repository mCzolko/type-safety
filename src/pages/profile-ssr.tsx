import ProfileComponent from '@/components/Profile'
import { QUERY_KEY_PROFILE } from '@/constants/queryKeys'
import { fetchProfile } from '@/hooks/useProfile'
import { dehydrate, QueryClient } from '@tanstack/react-query'


export default function ProfileSsr() {
  return (
    <ProfileComponent />
  )
}


export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([ QUERY_KEY_PROFILE ], fetchProfile)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
