import React from 'react';
import Hero from '../components/Hero';

export const metadata = {
    title: 'Arkam | Privacy Policy'
  }

const page = () => {
  return (
    <div>
      <Hero title="Privacy Policy" hideShape={true} />
      <div className="max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <p>
         Arkam.com is committed to protecting the privacy of visitors to this website. Arkam.com does not collect personal information when you visit our website unless you choose to provide that information. Outlined below is the Arkam.com online privacy policy. If you have questions about this policy, please let us know.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Information Collected Automatically</h2>
        <p>
          When you visit Arkam.com, we may collect and store some or all of the following: the Internet address from which you access Arkam.com, date and time, the name of the file or words you searched, items clicked on a page, and the browser and operating system used. This information is used to measure the number of visitors to the various sections of our site and identify system performance or problem areas. We also use this information to help us develop the site, analyze patterns of usage, and to make the site more useful. 
        </p>

      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p>
          Users are not required to provide any information to search and otherwise use Arkam.com. If you choose to provide us with personal information—like filling out a form on Arkam.com to ask questions, contact us, etc. with your name, organization, address, email address and phone number—we use that information to respond to your message, and to help get you the information you requested. We may share the information you give us with an affiliate to assist in answering your questions and to better understand your needs, or as otherwise required by law. We may also use your information to provide you marketing for our services and those of our affiliate companies. Any information provided in connection with your question or suggestion will not be publicly viewable on the website. 
        </p>
        <p className="mt-2">
          In contacting Arkam.com with your questions and comments, you should not include additional personal information.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Changes to this Policy</h2>
        <p>
          The Arkam.com privacy policy will be revised or updated if practices change, or if better ways to keep you informed are developed. You should refer to this page often for the latest information. If changes are made to this policy, a new policy will be posted on our site. Changes to the policy will not apply retroactively.
        </p>
        <p className="mt-2">
          If you have any questions or concerns, please contact us.
        </p>
      </div>
    </div>
    </div>
  )
}

export default page;
