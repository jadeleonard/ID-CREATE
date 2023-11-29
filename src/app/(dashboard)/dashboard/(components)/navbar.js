
import Link from 'next/link'
export default function Navbar() {
   
    return(
       
        <div className="flex flex-wrap mx-w-screen-xl items-center sticky top-0 justify-between p-4 shadow-md bg-transparent">
        <div className="font-bold text-2xl mx-auto text-slate-900">HealthCare</div>
        
            
            <ul className="hidden sm:inline-flex mx-auto gap-4">
        <li className="text-slate-900 text-sm hover:text-blue-400"><Link href='/sign-in'>Sign in</Link></li>
        <li className="text-slate-900 text-sm hover:text-blue-400"><Link href='/sign-up'>Sign up</Link></li>
        <li className="text-slate-900 text-sm hover:text-blue-400"><Link href='/dashboard'>Dashboard</Link></li>
        <li className="text-slate-900 text-sm hover:text-blue-400"><Link href='/sign-in'>Sign in</Link></li>
         
        </ul>
        </div>
       
   

        
    )
}
