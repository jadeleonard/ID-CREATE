export default function Navbar() {
    return(
        <div className="flex flex-wrap mx-w-screen-xl items-center sticky top-0 justify-between p-4 shadow-md bg-transparent">
        <div className="font-bold text-2xl mx-auto text-gray-100">HealthCare</div>
        
            
            <ul className="hidden sm:inline-flex mx-auto gap-4">
        <li className="text-gray-100 text-sm hover:text-blue-400">Sign in</li>
        <li className="text-gray-100 text-sm hover:text-blue-400">Dashboard</li>
        <li className="text-gray-100 text-sm hover:text-blue-400">Sign up</li>
        <li className="text-gray-100 text-sm hover:text-blue-400">Documentation</li>
         
        </ul>
        </div>
   

        
    )
}
