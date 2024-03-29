import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ProfileForm } from './ProfileForm'
import { SignOutButton } from '../components/buttons'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  const currentUserEmail = session?.user?.email!
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  })

  return (
    <main>
      <h1>Dashboard</h1>
      <SignOutButton />
      <ProfileForm user={user} />
    </main>
  )
}
