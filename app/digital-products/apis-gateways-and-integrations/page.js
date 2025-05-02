
import Hero from '@/app/components/Hero';
import React from 'react';
import CtaSection from '@/app/components/CtaSection';

export const metadata = {
    title: 'Digital Products | APIs, Gateways and Integrations',
    description: 'Unlock new possibilities with powerful API solutions that integrate effortlessly into your ecosystem. Whether you need seamless eSIM activation or a secure payment gateway, our technology simplifies the process, enhances security, and drives efficiency.',
  }

const page = () => {
  

  return (
    <div>
      <Hero title="APIs, Gateways and Integrations" description="Unlock new possibilities with powerful API solutions that integrate effortlessly into your ecosystem. Whether you need seamless eSIM activation or a secure payment gateway, our technology simplifies the process, enhances security, and drives efficiency."/>

      
      
      <CtaSection title="Connect, Scale, and Innovate with Ease" description="Arkam’s API solutions streamline operations, improve customer experiences, and drive digital transformation, all with minimal effort on your end." cta={{text: 'Schedule a Demo', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
