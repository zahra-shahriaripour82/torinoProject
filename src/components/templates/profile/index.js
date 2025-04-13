"use client"
import AccountInformation from './AccountInfoForm'
import BankAccountInfo from './bankAccountInfo'
import { useGetUserData } from '@/core/services/queries'

function Profile() {
    const { data, isPending } = useGetUserData()
  return (
<>

<AccountInformation data={data}/>
<BankAccountInfo/>
</>
  )
}

export default Profile