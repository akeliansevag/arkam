import Link from 'next/link';
import * as motion from "motion/react-client";
import { fadeInUp } from "./config/animations";
import Mobiles from './components/Mobiles';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Hero from './components/Hero';
import IconsTextGrid from './components/IconsTextGrid';
import Newsletter from './components/Newsletter';


// 
const Home = () => {
  const products = [
    {
      image: '/img/core-banking.webp',
      title: 'Core Banking',
      description: 'Unlock Next-Generation Core Banking Solutions',
      href: '/core-banking'
    },
    {
      image: '/img/digital-wallet.webp',
      title: 'Digital Wallet',
      description: 'Game Changing Digital Wallet Solutions',
      href: '/digital-wallet'
    },
    {
      image: '/img/digital-products.webp',
      title: 'Digital Products',
      description: 'Enhanced Mobile Solutions for Every Customer',
      href: '/digital-products'
    },
    {
      image: '/img/consultancy.webp',
      title: 'Consultancy',
      description: 'Tailored Consultancy Solutions for Maximized Growth',
      href: '/consultancy'
    },
  ];

  const services = [
    {
      icon: '/img/personalization-and-agility.svg',
      title: 'Personalization & Agility',
      description: 'The era of one-size-fits-all products is over as the future of finance is digital and AI-driven.'
    },
    {
      icon: '/img/compatibility.svg',
      title: 'Compatibility',
      description: 'With composability as your foundation, unlock the flexibility to craft innovative services tailored to each user.'
    },
    {
      icon: '/img/data-analytics.svg',
      title: 'Data Analytics',
      description: 'Empower your business clients to make quicker, smarter decisions with real-time data and automated workflows.'
    },
    {
      icon: '/img/sustainable-growth.svg',
      title: 'Sustainable Growth',
      description: 'The era of one-size-fits-all products is over as the future of finance is digital and AI-driven.'
    },
    {
      icon: '/img/security-and-compliance.svg',
      title: 'Security & Compliance',
      description: 'With composability as your foundation, unlock the flexibility to craft innovative services tailored to each user.'
    },
    {
      icon: '/img/seamless-integration.svg',
      title: 'Seamless Integration',
      description: 'Empower your business clients to make quicker, smarter decisions with real-time data and automated workflows.'
    },
    
  ];
  return (
    <div>
      
      
      <Hero title="Build Your Digital Bank like never before" subtitle="Arkam is your trusted partner in financial empowerment" description="Whether it’s Core Banking, Digital Wallets and Products, or Consulting, we offer you innovative solutions that elevate your business and position you at the center of the fintech map." cta={{link: '/', text:"Let's Connect"}}/>
      
      <section>
        <div className="container">
          <motion.h2 {...fadeInUp()} className="text-center section-title">Your Wallet, Your Brand, Your Way,</motion.h2>
          <div className="grid max-lg:grid-cols-1 lg:grid-cols-4 lg:mt-18 max-lg:mt-10 gap-5 lg:gap-10">
            
            {
              products.map((product,index)=>{
                return (
                  <div key={index}>
                    <motion.div {...fadeInUp(index/10)} className="text-center">
                      <Link href={product.href}>
                        <img className="max-lg:mx-auto max-lg:max-w-[300px] lg:w-full transition-all hover:brightness-120" src={product.image} alt={product.title} />
                      </Link>
                      
                      <Link href={product.href} className="mt-6 small-title inline-block text-gray-200 hover:text-white">{product.title}</Link>
                      <p className="mt-3">{product.description}</p>
                    </motion.div>
                  </div>
                  
                )
              })
            }
          </div>
        </div>
      </section>

      <IconsTextGrid title="The Future of Finance" items={services}/>
      
      <Mobiles />
          
      <section>
            <div className='container'>
                <div className='flex max-lg:flex-col lg:items-center gap-10'>
                    <div className='lg:w-1/2 max-lg:flex-wrap flex flex-col gap-5 max-lg:text-center'>
                      <Stats />
                    </div>
                    <div className='lg:w-1/2 max-lg:text-center'>
                      <motion.h2 {...fadeInUp()} className="section-title">Trusted by millions</motion.h2>
                      <motion.p {...fadeInUp(0.2)}>Imperdiet lorem condimentum sit augue. Amet consequat nec congue ut senectus enim mattis sit. Nisi commodo venenatis posuere sit at, venenatis.Gravida nulla facilisis
                      </motion.p>
                      <motion.div {...fadeInUp(0.3)}>
                        <Link className="button-primary" href="/">Learn More</Link>
                      </motion.div>
                    </div>
                </div>
            </div>
      </section>

      <Partners />
      <Newsletter />
    </div>
    
  );
}

export default Home;
