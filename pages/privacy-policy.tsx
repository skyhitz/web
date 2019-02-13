import React from 'react';
import Body from 'app/components/body/body';
import NavBar from 'app/components/navbar/navbar';
import BackgroundImage from 'app/components/background-image/background-image';

const PrivacyPolicy = () => (
  <Body>
    <div>
      <NavBar />
      <BackgroundImage />
      <div className='wrap'>
        <h1>PRIVACY STATEMENT</h1>
        <br />
        <h2>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
        <p>
          When you purchase something from our store, as part of the buying and
          selling process, we collect the personal information you give us such
          as your name, address and email address.
          <br />
          When you browse our store, we also automatically receive your
          computer’s internet protocol (IP) address in order to provide us with
          information that helps us learn about your browser and operating
          system.
          <br />
          Email marketing (if applicable): With your permission, we may send you
          emails about our services, new products and other updates.
        </p>
        <br />
        <h2>SECTION 2 - CONSENT</h2>
        <p>
          How do you get my consent?
          <br />
          When you provide us with personal information to complete a
          transaction, verify your credit card, place an order, arrange for a
          delivery or return a purchase, we imply that you consent to our
          collecting it and using it for that specific reason only.
          <br />
          If we ask for your personal information for a secondary reason, like
          marketing, we will either ask you directly for your expressed consent,
          or provide you with an opportunity to say no.
          <br />
          How do I withdraw my consent?
          <br />
          If after you opt-in, you change your mind, you may withdraw your
          consent for us to contact you, for the continued collection, use or
          disclosure of your information, at anytime, by contacting us at
          alejandro@skyhitzmusic.com or mailing us at: Skyhitz 2nd Floor, Mill
          Mall Tower Wickhams Cay 1 Road Town, Tortola, 1110, Virgin Islands,
          British
        </p>
        <h2>SECTION 3 - DISCLOSURE</h2>
        <p>
          We may disclose your personal information if we are required by law to
          do so or if you violate our Terms of Service.
        </p>
        <h2>SECTION 4 - STRIPE</h2>
        <p>
          Our payments are powered by Stripe Inc. They provide us with the
          platform that allows us to sell our services to you.
          <br />
          Your data is stored through Stripe’s data storage, databases and the
          general Stripe application. They store your data on a secure server
          behind a firewall.
          <br />
          Payment:
          <br />
          If you choose a direct payment gateway to complete your purchase, then
          Stripe stores your credit card data. It is encrypted through the
          Payment Card Industry Data Security Standard (PCI-DSS). Your purchase
          transaction data is stored only as long as is necessary to complete
          your purchase transaction. After that is complete, your purchase
          transaction information is deleted.
          <br />
          All direct payment gateways adhere to the standards set by PCI-DSS as
          managed by the PCI Security Standards Council, which is a joint effort
          of brands like Visa, MasterCard, American Express and Discover.
          <br />
          PCI-DSS requirements help ensure the secure handling of credit card
          information by our store and its service providers.
          <br />
          For more insight, you may also want to read Stripe’s Terms of Service
          or Privacy Statement.
        </p>
        <h2>SECTION 5 - THIRD-PARTY SERVICES</h2>
        <p>
          In general, the third-party providers used by us will only collect,
          use and disclose your information to the extent necessary to allow
          them to perform the services they provide to us.
          <br />
          However, certain third-party service providers, such as payment
          gateways and other payment transaction processors, have their own
          privacy policies in respect to the information we are required to
          provide to them for your purchase-related transactions.
          <br />
          For these providers, we recommend that you read their privacy policies
          so you can understand the manner in which your personal information
          will be handled by these providers.
          <br />
          In particular, remember that certain providers may be located in or
          have facilities that are located in a different jurisdiction than
          either you or us. So if you elect to proceed with a transaction that
          involves the services of a third-party service provider, then your
          information may become subject to the laws of the jurisdiction(s) in
          which that service provider or its facilities are located.
          <br />
          As an example, if you are located in Canada and your transaction is
          processed by a payment gateway located in the United States, then your
          personal information used in completing that transaction may be
          subject to disclosure under United States legislation, including the
          Patriot Act.
          <br />
          Once you leave our store’s website or are redirected to a third-party
          website or application, you are no longer governed by this Privacy
          Policy or our website’s Terms of Service. Links When you click on
          links on our store, they may direct you away from our site. We are not
          responsible for the privacy practices of other sites and encourage you
          to read their privacy statements.
        </p>
        <h2>SECTION 6 - SECURITY</h2>
        <p>
          To protect your personal information, we take reasonable precautions
          and follow industry best practices to make sure it is not
          inappropriately lost, misused, accessed, disclosed, altered or
          destroyed.
          <br />
          If you provide us with your credit card information, the information
          is encrypted using secure socket layer technology (SSL) and stored
          with a AES-256 encryption. Although no method of transmission over the
          Internet or electronic storage is 100% secure, we follow all PCI-DSS
          requirements and implement additional generally accepted industry
          standards.
        </p>
        <h2>SECTION 6 - COOKIES</h2>
        <p>
          We use various technologies to collect and store information when you
          visit our services, and this may include using cookies or similar
          technologies to identify your browser or device. We also use these
          technologies to collect and store information when you interact with
          services we offer to our partners, such as advertising services. We
          use google analytics which helps businesses and site owners analyze
          the traffic to their websites and apps.
        </p>
        <h2>SECTION 7 - AGE OF CONSENT</h2>
        <p>
          By using this site or any of our apps, you represent that you are at
          least the age of majority in your state or province of residence, or
          that you are the age of majority in your state or province of
          residence and you have given us your consent to allow any of your
          minor dependents to use this site.
        </p>
        <h2>SECTION 8 - CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website. If we make
          material changes to this policy, we will notify you here that it has
          been updated, so that you are aware of what information we collect,
          how we use it, and under what circumstances, if any, we use and/or
          disclose it.
          <br />
          If our apps are acquired or merged with another company, your
          information may be transferred to the new owners so that we may
          continue to sell services to you.
        </p>
        <h2>QUESTIONS AND CONTACT INFORMATION</h2>
        <p>
          If you would like to: access, correct, amend or delete any personal
          information we have about you, register a complaint, or simply want
          more information contact our Privacy Compliance Officer at
          alejandro@skyhitzmusic.com.
        </p>
      </div>
      <style jsx>{`
        h1 {
          font-family: Raleway;
          font-weight: 200;
          font-size: 24px;
          color: white;
          text-align: center;
          letter-spacing: 2px;
        }
        h2 {
          font-family: Raleway;
          font-weight: 200;
          font-size: 14px;
          color: white;
          text-align: center;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: left;
          margin-top: 40px;
        }
        p {
          text-align: left;
          font-size: 12px;
          letter-spacing: 2px;
          line-height: 1.6;
        }
        br {
          line-break: initial;
          display: block;
          margin: 15px 0;
          content: ' ';
        }
        .wrap {
          z-index: 1;
          background: #000000d4;
          position: relative;
          margin: 0px auto;
          max-width: 800px;
          display: table;
          color: white;
          font-family: 'Raleway';
          top: 75px;
          padding-left: 40px;
          padding-right: 40px;
          padding-bottom: 40px;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  </Body>
);

export default PrivacyPolicy;
