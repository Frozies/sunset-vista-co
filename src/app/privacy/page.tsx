import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Sunset Vista Co",
    description: "Privacy Policy for Sunset Vista Co - Learn how we collect, use, and protect your personal information.",
    robots: "index, follow",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-2">PRIVACY POLICY</h1>
                    <p className="text-muted-foreground mb-8">Last updated October 04, 2025</p>

                    <div className="space-y-8">
                        <section>
                            <p>
                                This Privacy Notice for <strong>Sunset Vista Company, LLC</strong> (doing business as{" "}
                                <strong>Sunset Vista Co.</strong>) (&quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or
                                &quot;<strong>our</strong>&quot;), describes how and why we might access, collect, store, use, and/or
                                share (&quot;<strong>process</strong>&quot;) your personal information when you use our services (&quot;
                                <strong>Services</strong>&quot;), including when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Visit our website at sunsetvista.co, or any website of ours that links to this Privacy Notice
                                </li>
                                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                            </ul>
                            <p>
                                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your
                                privacy rights and choices. We are responsible for making decisions about how your personal information
                                is processed. If you do not agree with our policies and practices, please do not use our Services. If
                                you still have any questions or concerns, please contact us at info@sunsetvista.co.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">SUMMARY OF KEY POINTS</h2>
                            <p className="italic">
                                This summary provides key points from our Privacy Notice, but you can find out more details about any of
                                these topics by clicking the link following each key point or by using our table of contents below to
                                find the section you are looking for.
                            </p>
                            <div className="space-y-3 mt-4">
                                <p>
                                    <strong>What personal information do we process?</strong> When you visit, use, or navigate our
                                    Services, we may process personal information depending on how you interact with us and the Services,
                                    the choices you make, and the products and features you use.
                                </p>
                                <p>
                                    <strong>Do we process any sensitive personal information?</strong> Some of the information may be
                                    considered &quot;special&quot; or &quot;sensitive&quot; in certain jurisdictions, for example your
                                    racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive
                                    personal information.
                                </p>
                                <p>
                                    <strong>Do we collect any information from third parties?</strong> We do not collect any information
                                    from third parties.
                                </p>
                                <p>
                                    <strong>How do we process your information?</strong> We process your information to provide, improve,
                                    and administer our Services, communicate with you, for security and fraud prevention, and to comply
                                    with law. We may also process your information for other purposes with your consent. We process your
                                    information only when we have a valid legal reason to do so.
                                </p>
                                <p>
                                    <strong>In what situations and with which parties do we share personal information?</strong> We may
                                    share information in specific situations and with specific third parties.
                                </p>
                                <p>
                                    <strong>How do we keep your information safe?</strong> We have adequate organizational and technical
                                    processes and procedures in place to protect your personal information. However, no electronic
                                    transmission over the internet or information storage technology can be guaranteed to be 100% secure,
                                    so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
                                    will not be able to defeat our security and improperly collect, access, steal, or modify your
                                    information.
                                </p>
                                <p>
                                    <strong>What are your rights?</strong> Depending on where you are located geographically, the
                                    applicable privacy law may mean you have certain rights regarding your personal information.
                                </p>
                                <p>
                                    <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
                                    contacting us at info@sunsetvista.co. We will consider and act upon any request in accordance
                                    with applicable data protection laws.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mt-8 mb-4">TABLE OF CONTENTS</h2>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>
                                    <a href="#info-collect" className="text-primary hover:underline">
                                        WHAT INFORMATION DO WE COLLECT?
                                    </a>
                                </li>
                                <li>
                                    <a href="#info-use" className="text-primary hover:underline">
                                        HOW DO WE PROCESS YOUR INFORMATION?
                                    </a>
                                </li>
                                <li>
                                    <a href="#legal-bases" className="text-primary hover:underline">
                                        WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                                    </a>
                                </li>
                                <li>
                                    <a href="#info-share" className="text-primary hover:underline">
                                        WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                    </a>
                                </li>
                                <li>
                                    <a href="#cookies" className="text-primary hover:underline">
                                        DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                                    </a>
                                </li>
                                <li>
                                    <a href="#info-retain" className="text-primary hover:underline">
                                        HOW LONG DO WE KEEP YOUR INFORMATION?
                                    </a>
                                </li>
                                <li>
                                    <a href="#info-safe" className="text-primary hover:underline">
                                        HOW DO WE KEEP YOUR INFORMATION SAFE?
                                    </a>
                                </li>
                                <li>
                                    <a href="#info-minors" className="text-primary hover:underline">
                                        DO WE COLLECT INFORMATION FROM MINORS?
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacy-rights" className="text-primary hover:underline">
                                        WHAT ARE YOUR PRIVACY RIGHTS?
                                    </a>
                                </li>
                                <li>
                                    <a href="#dnt" className="text-primary hover:underline">
                                        CONTROLS FOR DO-NOT-TRACK FEATURES
                                    </a>
                                </li>
                                <li>
                                    <a href="#updates" className="text-primary hover:underline">
                                        DO WE MAKE UPDATES TO THIS NOTICE?
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-primary hover:underline">
                                        HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                    </a>
                                </li>
                                <li>
                                    <a href="#request" className="text-primary hover:underline">
                                        HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                                    </a>
                                </li>
                            </ol>
                        </section>

                        <section id="info-collect">
                            <h2 className="text-2xl font-bold mt-8 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
                            <h3 className="text-xl font-semibold mt-6 mb-3">Personal information you disclose to us</h3>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We collect personal information that you provide to us.
                            </p>
                            <p>
                                We collect personal information that you voluntarily provide to us when you express an interest in
                                obtaining information about us or our products and Services, when you participate in activities on the
                                Services, or otherwise when you contact us.
                            </p>
                            <p className="mt-3">
                                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends
                                on the context of your interactions with us and the Services, the choices you make, and the products and
                                features you use. The personal information we collect may include the following:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mt-2">
                                <li>names</li>
                                <li>phone numbers</li>
                                <li>email addresses</li>
                                <li>mailing addresses</li>
                                <li>job titles</li>
                                <li>usernames</li>
                                <li>contact preferences</li>
                                <li>contact or authentication data</li>
                                <li>billing addresses</li>
                                <li>debit/credit card numbers</li>
                            </ul>
                            <p className="mt-3">
                                <strong>Sensitive Information.</strong> We do not process sensitive information.
                            </p>
                            <p className="mt-3">
                                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to
                                make purchases, such as your payment instrument number, and the security code associated with your
                                payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice
                                link(s) here: https://stripe.com/privacy.
                            </p>
                            <p className="mt-3">
                                All personal information that you provide to us must be true, complete, and accurate, and you must
                                notify us of any changes to such personal information.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-3">Information automatically collected</h3>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser
                                and device characteristics — is collected automatically when you visit our Services.
                            </p>
                            <p>
                                We automatically collect certain information when you visit, use, or navigate the Services. This
                                information does not reveal your specific identity (like your name or contact information) but may
                                include device and usage information, such as your IP address, browser and device characteristics,
                                operating system, language preferences, referring URLs, device name, country, location, information
                                about how and when you use our Services, and other technical information. This information is primarily
                                needed to maintain the security and operation of our Services, and for our internal analytics and
                                reporting purposes.
                            </p>
                            <p className="mt-3">
                                Like many businesses, we also collect information through cookies and similar technologies.
                            </p>
                            <p className="mt-3">The information we collect includes:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>
                                    <strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and
                                    performance information our servers automatically collect when you access or use our Services and
                                    which we record in log files. Depending on how you interact with us, this log data may include your IP
                                    address, device information, browser type, and settings and information about your activity in the
                                    Services (such as the date/time stamps associated with your usage, pages and files viewed, searches,
                                    and other actions you take such as which features you use), device event information (such as system
                                    activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware settings).
                                </li>
                                <li>
                                    <strong>Device Data.</strong> We collect device data such as information about your computer, phone,
                                    tablet, or other device you use to access the Services. Depending on the device used, this device data
                                    may include information such as your IP address (or proxy server), device and application
                                    identification numbers, location, browser type, hardware model, Internet service provider and/or
                                    mobile carrier, operating system, and system configuration information.
                                </li>
                                <li>
                                    <strong>Location Data.</strong> We collect location data such as information about your device&apos;s
                                    location, which can be either precise or imprecise. How much information we collect depends on the
                                    type and settings of the device you use to access the Services. For example, we may use GPS and other
                                    technologies to collect geolocation data that tells us your current location (based on your IP
                                    address). You can opt out of allowing us to collect this information either by refusing access to the
                                    information or by disabling your Location setting on your device. However, if you choose to opt out,
                                    you may not be able to use certain aspects of the Services.
                                </li>
                            </ul>
                        </section>

                        <section id="info-use">
                            <h2 className="text-2xl font-bold mt-8 mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We process your information to provide, improve, and administer our Services,
                                communicate with you, for security and fraud prevention, and to comply with law. We may also process
                                your information for other purposes with your consent.
                            </p>
                            <p>
                                <strong>
                                    We process your personal information for a variety of reasons, depending on how you interact with our
                                    Services, including:
                                </strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-3">
                                <li>
                                    <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your
                                    information to provide you with the requested service.
                                </li>
                                <li>
                                    <strong>To respond to user inquiries/offer support to users.</strong> We may process your information
                                    to respond to your inquiries and solve any potential issues you might have with the requested service.
                                </li>
                                <li>
                                    <strong>To send administrative information to you.</strong> We may process your information to send
                                    you details about our products and services, changes to our terms and policies, and other similar
                                    information.
                                </li>
                                <li>
                                    <strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and
                                    manage your orders, payments, returns, and exchanges made through the Services.
                                </li>
                                <li>
                                    <strong>To request feedback.</strong> We may process your information when necessary to request
                                    feedback and to contact you about your use of our Services.
                                </li>
                                <li>
                                    <strong>To send you marketing and promotional communications.</strong> We may process the personal
                                    information you send to us for our marketing purposes, if this is in accordance with your marketing
                                    preferences. You can opt out of our marketing emails at any time.
                                </li>
                                <li>
                                    <strong>To deliver targeted advertising to you.</strong> We may process your information to develop
                                    and display personalized content and advertising tailored to your interests, location, and more.
                                </li>
                                <li>
                                    <strong>To protect our Services.</strong> We may process your information as part of our efforts to
                                    keep our Services safe and secure, including fraud monitoring and prevention.
                                </li>
                                <li>
                                    <strong>To identify usage trends.</strong> We may process information about how you use our Services
                                    to better understand how they are being used so we can improve them.
                                </li>
                                <li>
                                    <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may
                                    process your information to better understand how to provide marketing and promotional campaigns that
                                    are most relevant to you.
                                </li>
                                <li>
                                    <strong>To save or protect an individual&apos;s vital interest.</strong> We may process your
                                    information when necessary to save or protect an individual&apos;s vital interest, such as to prevent
                                    harm.
                                </li>
                            </ul>
                        </section>

                        <section id="legal-bases">
                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                            </h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We only process your personal information when we believe it is necessary and
                                we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent,
                                to comply with laws, to provide you with services to enter into or fulfill our contractual obligations,
                                to protect your rights, or to fulfill our legitimate business interests.
                            </p>
                            <p>
                                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we
                                rely on in order to process your personal information. As such, we may rely on the following legal bases
                                to process your personal information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-3">
                                <li>
                                    <strong>Consent.</strong> We may process your information if you have given us permission (i.e.,
                                    consent) to use your personal information for a specific purpose. You can withdraw your consent at any
                                    time.
                                </li>
                                <li>
                                    <strong>Performance of a Contract.</strong> We may process your personal information when we believe
                                    it is necessary to fulfill our contractual obligations to you, including providing our Services or at
                                    your request prior to entering into a contract with you.
                                </li>
                                <li>
                                    <strong>Legitimate Interests.</strong> We may process your information when we believe it is
                                    reasonably necessary to achieve our legitimate business interests and those interests do not outweigh
                                    your interests and fundamental rights and freedoms. For example, we may process your personal
                                    information for some of the purposes described in order to:
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Send users information about special offers and discounts on our products and services</li>
                                        <li>Develop and display personalized and relevant advertising content for our users</li>
                                        <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                                        <li>Support our marketing activities</li>
                                        <li>Diagnose problems and/or prevent fraudulent activities</li>
                                        <li>Understand how our users use our products and services so we can improve user experience</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary
                                    for compliance with our legal obligations, such as to cooperate with a law enforcement body or
                                    regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in
                                    litigation in which we are involved.
                                </li>
                                <li>
                                    <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to
                                    protect your vital interests or the vital interests of a third party, such as situations involving
                                    potential threats to the safety of any person.
                                </li>
                            </ul>
                        </section>

                        <section id="info-share">
                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                            </h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We may share information in specific situations described in this section
                                and/or with the following third parties.
                            </p>
                            <p>We may need to share your personal information in the following situations:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-3">
                                <li>
                                    <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or
                                    during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                                    portion of our business to another company.
                                </li>
                                <li>
                                    <strong>When we use Google Analytics.</strong> We may share your information with Google Analytics to
                                    track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the
                                    Services, visit https://tools.google.com/dlpage/gaoptout.
                                </li>
                                <li>
                                    <strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will
                                    require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any
                                    subsidiaries, joint venture partners, or other companies that we control or that are under common
                                    control with us.
                                </li>
                                <li>
                                    <strong>Business Partners.</strong> We may share your information with our business partners to offer
                                    you certain products, services, or promotions.
                                </li>
                            </ul>
                        </section>

                        <section id="cookies">
                            <h2 className="text-2xl font-bold mt-8 mb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your
                                information.
                            </p>
                            <p>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information
                                when you interact with our Services. Some online tracking technologies help us maintain the security of
                                our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic
                                site functions.
                            </p>
                            <p className="mt-3">
                                We also permit third parties and service providers to use online tracking technologies on our Services
                                for analytics and advertising, including to help manage and display advertisements, to tailor
                                advertisements to your interests, or to send abandoned shopping cart reminders (depending on your
                                communication preferences). The third parties and service providers use their technology to provide
                                advertising about products and services tailored to your interests which may appear either on our
                                Services or on other websites.
                            </p>
                            <p className="mt-3">
                                Specific information about how we use such technologies and how you can refuse certain cookies is set
                                out in our Cookie Notice.
                            </p>
                        </section>

                        <section id="info-retain">
                            <h2 className="text-2xl font-bold mt-8 mb-4">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes
                                outlined in this Privacy Notice unless otherwise required by law.
                            </p>
                            <p>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in
                                this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax,
                                accounting, or other legal requirements). No purpose in this notice will require us keeping your
                                personal information for longer than 2 years.
                            </p>
                            <p className="mt-3">
                                When we have no ongoing legitimate business need to process your personal information, we will either
                                delete or anonymize such information, or, if this is not possible (for example, because your personal
                                information has been stored in backup archives), then we will securely store your personal information
                                and isolate it from any further processing until deletion is possible.
                            </p>
                        </section>

                        <section id="info-safe">
                            <h2 className="text-2xl font-bold mt-8 mb-4">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We aim to protect your personal information through a system of
                                organizational and technical security measures.
                            </p>
                            <p>
                                We have implemented appropriate and reasonable technical and organizational security measures designed
                                to protect the security of any personal information we process. However, despite our safeguards and
                                efforts to secure your information, no electronic transmission over the Internet or information storage
                                technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                                cybercriminals, or other unauthorized third parties will not be able to defeat our security and
                                improperly collect, access, steal, or modify your information. Although we will do our best to protect
                                your personal information, transmission of personal information to and from our Services is at your own
                                risk. You should only access the Services within a secure environment.
                            </p>
                        </section>

                        <section id="info-minors">
                            <h2 className="text-2xl font-bold mt-8 mb-4">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of
                                age.
                            </p>
                            <p>
                                We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we
                                knowingly sell such personal information. By using the Services, you represent that you are at least 18
                                or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of
                                the Services. If we learn that personal information from users less than 18 years of age has been
                                collected, we will deactivate the account and take reasonable measures to promptly delete such data from
                                our records. If you become aware of any data we may have collected from children under age 18, please
                                contact us at info@sunsetvista.co.
                            </p>
                        </section>

                        <section id="privacy-rights">
                            <h2 className="text-2xl font-bold mt-8 mb-4">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as
                                the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you
                                greater access to and control over your personal information. You may review, change, or terminate your
                                account at any time, depending on your country, province, or state of residence.
                            </p>
                            <p>
                                In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data
                                protection laws. These may include the right (i) to request access and obtain a copy of your personal
                                information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal
                                information; (iv) if applicable, to data portability; and (v) not to be subject to automated
                                decision-making. In certain circumstances, you may also have the right to object to the processing of
                                your personal information. You can make such a request by contacting us by using the contact details
                                provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
                            </p>
                            <p className="mt-3">
                                We will consider and act upon any request in accordance with applicable data protection laws.
                            </p>
                            <p className="mt-3">
                                If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                                information, you also have the right to complain to your Member State data protection authority or UK
                                data protection authority.
                            </p>
                            <p className="mt-3">
                                If you are located in Switzerland, you may contact the Federal Data Protection and Information
                                Commissioner.
                            </p>
                            <p className="mt-3">
                                <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal
                                information, you have the right to withdraw your consent at any time. You can withdraw your consent at
                                any time by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT
                                US ABOUT THIS NOTICE?&quot; below.
                            </p>
                            <p className="mt-3">
                                However, please note that this will not affect the lawfulness of the processing before its withdrawal
                                nor, will it affect the processing of your personal information conducted in reliance on lawful
                                processing grounds other than consent.
                            </p>
                            <p className="mt-3">
                                <strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our
                                marketing and promotional communications at any time by clicking on the unsubscribe link in the emails
                                that we send, or by contacting us using the details provided in the section &quot;HOW CAN YOU CONTACT US
                                ABOUT THIS NOTICE?&quot; below. You will then be removed from the marketing lists. However, we may still
                                communicate with you — for example, to send you service-related messages that are necessary for the
                                administration and use of your account, to respond to service requests, or for other non-marketing
                                purposes.
                            </p>
                        </section>

                        <section id="dnt">
                            <h2 className="text-2xl font-bold mt-8 mb-4">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                            <p>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
                                (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data
                                about your online browsing activities monitored and collected. At this stage, no uniform technology
                                standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently
                                respond to DNT browser signals or any other mechanism that automatically communicates your choice not to
                                be tracked online. If a standard for online tracking is adopted that we must follow in the future, we
                                will inform you about that practice in a revised version of this Privacy Notice.
                            </p>
                        </section>

                        <section id="updates">
                            <h2 className="text-2xl font-bold mt-8 mb-4">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                            <p className="italic mb-3">
                                <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant
                                laws.
                            </p>
                            <p>
                                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
                                &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy
                                Notice, we may notify you either by prominently posting a notice of such changes or by directly sending
                                you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we
                                are protecting your information.
                            </p>
                        </section>

                        <section id="contact">
                            <h2 className="text-2xl font-bold mt-8 mb-4">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                            <p>
                                If you have questions or comments about this notice, you may email us at info@sunsetvista.co or
                                contact us by post at:
                            </p>
                            <div className="mt-3 pl-4">
                                <p>Sunset Vista Company, LLC</p>
                                <p>Cape Coral, FL 33904</p>
                                <p>United States</p>
                            </div>
                        </section>

                        <section id="request">
                            <h2 className="text-2xl font-bold mt-8 mb-4">
                                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                            </h2>
                            <p>
                                Based on the applicable laws of your country or state of residence in the US, you may have the right to
                                request access to the personal information we collect from you, details about how we have processed it,
                                correct inaccuracies, or delete your personal information. You may also have the right to withdraw your
                                consent to our processing of your personal information. These rights may be limited in some
                                circumstances by applicable law. To request to review, update, or delete your personal information,
                                please email us at info@sunsetvista.co.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
