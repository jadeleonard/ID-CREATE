import Image from 'next/image'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
export default function Hero(){

    return(       



<section class="bg-zinc-100 dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Tabs defaultValue='Sign up' className='w-[400px]'>
<TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Sign up" className='bg-zinc-100 shadow-md'>Sign up</TabsTrigger>
        <TabsTrigger value="Sign in" className='bg-zinc-100 shadow-md'>Sign in</TabsTrigger>
      </TabsList>
      <TabsContent value='Sign up' className='bg-zinc-100 shadow-md'>
        <Card>
            <CardHeader className='block mb-2 p-2'>Sign up</CardHeader>
            <CardTitle className='block mb-2 p-2'>Create your own account to use HealthCare</CardTitle>
            <CardContent>
            <CardDescription className='block mb-2'>Dont anyone your information</CardDescription>
            <label htmlFor='email' className='block mb-2'>Email</label>
            <Input  className='Email block mb-2'type='email'/>
            <label htmlFor='password' className='block mb-2'>Password</label>
            <Input  className='Passwrod block mb-2'type='password'/>
            </CardContent>
            <Button>Submit</Button>
        </Card>
      </TabsContent>
      <TabsContent value='Sign in' className='bg-zinc-100 '>
        <Card>
            <CardHeader className='block mb-2 p-2'>Sign in</CardHeader>
            <CardTitle className='block mb-2 p-2'>Welcome back!! Hope you have nice day</CardTitle>
            <CardContent>
            <CardDescription className='block mb-2'>Dont anyone your information</CardDescription>
            <label htmlFor='email' className='block mb-2'>Email</label>
            <Input  className='Email block mb-2'type='email'/>
            <label htmlFor='password' className='block mb-2'>Password</label>
            <Input  className='Passwrod block mb-2'type='password'/>
            </CardContent>
            <Button>Submit</Button>
        </Card>
      </TabsContent>
</Tabs>
        </div>                
    </div>
</section>


    )
}