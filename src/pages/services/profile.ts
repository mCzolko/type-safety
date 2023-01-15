export type Profile = {
  name: string
  bio: string
}

export default async (): Promise<Profile> => {
  return { name: 'John Doe', bio: 'I\'m a person.' }
}
