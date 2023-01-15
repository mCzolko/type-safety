import { QUERY_KEY_PROFILE } from '@/constants/queryKeys'
import { useQuery } from '@tanstack/react-query'


export type Profile = {
  name: string
  bio: string
}


export const fetchProfile = async (): Promise<Profile> => {
  return { name: 'John Doe', bio: 'I\'m a person.' }
}


export const useProfile = () => useQuery<Profile>({
  queryKey: [ QUERY_KEY_PROFILE ],
  queryFn: () => fetchProfile(),
})
