export const mainMenu = [
    {
      title: 'Core Banking',
      children: [
        {
            title: 'Platform',
            href: '/core-banking/platform',
            items: [
                {title: 'Core Banking', href: '/core-banking'},
                {title: 'Hybrid', href: '/core-banking/platform/hybrid'},
                {title: 'Cloud Based', href: '/core-banking/platform/cloud-based'},
                {title: 'Onsite', href: '/core-banking/platform/on-premises'}
            ]
        },
        {
            title: 'Solution',
            href: '/core-banking/solution',
            items: [
                {title: 'Retail Banking', href: '/core-banking/solution/retail-banking'},
                {title: 'Analytics & Reports', href: '/core-banking/solution/analytics-and-reports'},
                {title: 'Tariffs & Fees', href: '/core-banking/solution/tariffs-and-fees'},
                {title: 'Corporate Banking', href: '/core-banking/solution/corporate-banking'}
            ]
        },
        {
            title: 'Technologies',
            items: [
                {title: 'Open Architecture', href: '/core-banking/technologies/open-architecture'},
                {title: 'Open Ecosystem', href: '/core-banking/technologies/open-ecosystem'},
                {title: 'Composability', href: '/core-banking/technologies/composability'},
                {title: 'Security', href: '/core-banking/technologies/security'},
                {title: 'Orchestration Integrations', href: '/core-banking/technologies/orchestration-integrations'},
                {title: 'Business Process Workflow', href: '/core-banking/technologies/business-process-workflow'},
            ]
        },
      ],
    },
    {
      title: 'Digital Wallet',
      href: '/digital-wallet',
      children: [],
    },
    {
      title: 'Digital Products',
      children: [
        {
            title: 'Card Management',
            href: '/digital-products/card-management-system',
            items: [],
        },
        {
            title: 'Personal Financial Management (PFM)',
            href: '/digital-products/personal-financial-management',
            items: [],
        },
        {
            title: 'Loyalty Management',
            href: '/digital-products/loyalty-management',
            items: [],
        },
        {
          title: 'Loan Management System',
          href: '/digital-products/loan-management-system',
          items: [],
      },
        {
            title: 'Payments and Transfers',
            href: '/digital-products/payments-and-transfers',
            items: [
                { title: 'Bill Payments', href: '/digital-products/payments-and-transfers#bill-payments' },
                { title: 'Remittances', href: '/digital-products/payments-and-transfers#remittances' },
                { title: 'POS', href: '/digital-products/payments-and-transfers#pos' },
                { title: 'Online Payments and Reservation', href: '/digital-products/payments-and-transfers#online-payments-and-reservation' },
            ],
        },
        {
            title: 'Customer Onboarding',
            href: '/digital-products/customer-onboarding',
            items: [
                { title: 'AML/KYC', href: '/customer-onboarding#aml-kyc' },
                { title: 'Video/Liveness Check', href: '/customer-onboarding#video-liveness-check' },
                { title: 'OCR Data Capture', href: '/customer-onboarding#ocr-data-capture' },
            ],
        },
        {
            title: 'APIs, Gateways, Integrations',
            href: '/digital-products/apis-gateways-and-integrations',
            items: [
                { title: 'eSIM', href: '/apis-gateways-integrations#esim' },
                { title: 'Payment Gateway', href: '/apis-gateways-integrations#payment-gateway' },
            ],
        },
      ],
    },
    {
      title: 'Consultancy',
      href: '/consultancy',
      children: [],
    },
    {
      title: 'Company',
      children: [
        { title: 'About Arkam', href: '/about-arkam' },
        { title: 'Leadership Team', href: '/leadership-team' },
        { title: 'Careers', href: '/careers' },
        // { title: 'Success Stories', href: '/success-stories' },
        { title: 'Partner With Us', href: '/partner-with-us' },
        { title: 'Contact Us', href: '/contact-us' },
      ],
    },
    // {
    //   title: 'Media',
    //   href: '/media',
    //   children: [],
    // },
  ];