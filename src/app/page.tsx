import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowDownToLine,
  CheckCircle,
  Activity,
  ShieldPlus,
} from 'lucide-react'
import ProductReel from "@/components/ProductReel";



const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delivered to your email in minutes and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'Accessibility',
    Icon: Activity,
    description:
      " Navigate through a seamless digital marketplace where finding what you need is just a click away. Explore a curated selection of the latest products and services.",
  },
  {
    name: 'Secure',
    Icon: ShieldPlus,
    description:
      "We leverage the latest in technology to bring you a digital marketplace that's intuitive, fast, and secure. Say goodbye to hassles and hello to an unparalleled online shopping experience.",
  },
]


export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-3xl max-[430px]:text-2xl min-[730px]:text-5xl font-bold tracking-tight text-gray-800 min-[930px]:text-6xl'>
               Seamless, smart, and yours<span  className='text-purple-900'>...</span>{' '}
            <span className='text-purple-900 block max-[430px]:text-xl text-2xl min-[930px]:text-4xl mt-2'>
               next-gen digital marketplace.  
            </span>
            
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground max-[730px]:text-[15px]'>
            Welcome to Xchange<span className='text-purple-800 text-xl font-medium'>
               -
            </span>Sphere.  Step into the future of digital shopping and experience a platform designed for the modern consumer. Elevate your online journey with us.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        {/* <ProductReel /> */}
        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />

      
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-purple-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

