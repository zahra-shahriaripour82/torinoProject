"use client"
import AccountInformation from './AccountInfoForm'
import { useGetUserData } from '@/core/services/queries'

function Profile() {
    const { data, isPending } = useGetUserData()
  return (

    <AccountInformation data={data}/>
  )
}

export default Profile