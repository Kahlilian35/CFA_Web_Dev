import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-lg text-accent-foreground/80">Last Updated: January 03, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              This policy outlines how Creative Flow Advertising LLC collects, uses, and protects your data.
            </p>

            {/* Interpretation and Definitions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Interpretation and Definitions</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For the purposes of this Privacy Policy, the following terms are defined:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>
                  <strong>Account:</strong> A unique account created for you to access our Service
                </li>
                <li>
                  <strong>Company:</strong> Refers to Creative Flow Advertising LLC
                </li>
                <li>
                  <strong>Cookies:</strong> Small files placed on your device by a website
                </li>
                <li>
                  <strong>Device:</strong> Any device that can access the Service (computer, phone, tablet)
                </li>
                <li>
                  <strong>Personal Data:</strong> Information that relates to an identified or identifiable individual
                </li>
                <li>
                  <strong>Service:</strong> Refers to the Website and services provided by Creative Flow Advertising
                </li>
                <li>
                  <strong>Usage Data:</strong> Data collected automatically through use of the Service
                </li>
                <li>
                  <strong>Website:</strong> Creative Flow Advertising, accessible from creativeflowadvertising.com
                </li>
              </ul>
            </div>

            {/* Collecting and Using Your Personal Data */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Collecting and Using Your Personal Data</h2>

              <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Personal Data</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                While using our Service, we may ask you to provide certain personally identifiable information that can
                be used to contact or identify you. This may include:
              </p>
              <ul className="space-y-2 text-foreground/80 mb-6">
                <li>Name and business name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business details and industry information</li>
                <li>Billing and payment information</li>
                <li>Other information you voluntarily provide</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Usage Data</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Usage Data is collected automatically when using the Service and may include:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referral sources</li>
                <li>Other diagnostic data</li>
              </ul>
            </div>

            {/* Tracking Technologies & Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Tracking Technologies & Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use Cookies and similar tracking technologies to track activity on our Service. Technologies used
                include:
              </p>
              <ul className="space-y-3 text-foreground/80 mb-4">
                <li>
                  <strong>Session Cookies:</strong> Temporary cookies deleted after you close your browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Cookies that remain on your device for future visits
                </li>
                <li>
                  <strong>Web Beacons:</strong> Small electronic files used to track engagement and statistics
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                You can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent. However,
                if you do not accept Cookies, you may not be able to use some portions of our Service.
              </p>
            </div>

            {/* Use of Your Personal Data */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Use of Your Personal Data</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="space-y-2 text-foreground/80 mb-6">
                <li>
                  <strong>Service delivery:</strong> To provide and maintain our Service
                </li>
                <li>
                  <strong>Account management:</strong> To manage your registration and account
                </li>
                <li>
                  <strong>Marketing:</strong> To provide news, offers, and information about our services
                </li>
                <li>
                  <strong>Targeted advertising:</strong> To deliver relevant content and advertisements
                </li>
                <li>
                  <strong>Behavior analysis:</strong> To understand how our Service is used
                </li>
                <li>
                  <strong>Customer support:</strong> To respond to your requests and provide assistance
                </li>
                <li>
                  <strong>Legal compliance:</strong> To comply with legal obligations
                </li>
                <li>
                  <strong>Fraud prevention:</strong> To detect and prevent fraudulent activity
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">
                AI Data Processing & Automated Insights
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use artificial intelligence and machine learning technologies to:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>Optimize marketing campaigns and content recommendations</li>
                <li>Track engagement patterns and user behavior</li>
                <li>Segment audiences for personalized experiences</li>
                <li>Generate predictive insights for business intelligence</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                We are committed to ethical AI practices, including transparency, bias reduction, and fairness in
                automated decision-making.
              </p>
            </div>

            {/* Data Sharing & Disclosure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Sharing & Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your Personal Data in the following situations:
              </p>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li>
                  <strong>With Service Providers:</strong> To monitor and analyze the use of our Service
                </li>
                <li>
                  <strong>For Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>With Affiliates/Partners:</strong> With trusted business partners who assist in operations
                </li>
                <li>
                  <strong>For Legal Compliance:</strong> When required by law or to protect our rights
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed font-semibold">
                We do not sell or rent your personal data to third parties.
              </p>
            </div>

            {/* Data Retention & Deletion */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Retention & Deletion</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We will retain your Personal Data only for as long as necessary for the purposes set out in this Privacy
                Policy. We will retain and use your data to comply with legal obligations, resolve disputes, and enforce
                our agreements.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                You have the right to request deletion of your Personal Data. Please contact us to exercise this right.
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Security of Your Personal Data</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The security of your Personal Data is important to us. We use commercially acceptable means to protect
                it, including:
              </p>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security audits and monitoring</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its
                absolute security.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our Service is not intended for users under the age of 13. We do not knowingly collect personally
                identifiable information from anyone under 13. If you are a parent or guardian and believe your child
                has provided us with Personal Data, please contact us.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Links & Services</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our Service may contain links to third-party websites or services that are not operated by us. We
                strongly advise you to review the Privacy Policy of every site you visit. We have no control over and
                assume no responsibility for the content, privacy policies, or practices of any third-party sites or
                services.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">International Data Transfers</h2>
              <p className="text-foreground/80 leading-relaxed">
                Your information, including Personal Data, may be transferred to and maintained on computers located
                outside of your state, province, country, or other governmental jurisdiction where data protection laws
                may differ. We take steps to ensure that your data is treated securely and in accordance with this
                Privacy Policy.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Privacy Rights & Choices</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li>Access and review your Personal Data</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your Personal Data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Object to certain data processing activities</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:creativeflowadvertising@gmail.com" className="text-accent hover:underline">
                  creativeflowadvertising@gmail.com
                </a>
              </p>
            </div>

            {/* AI Ethics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">AI Ethics & Data Protection Compliance</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We are committed to responsible AI practices, including:
              </p>
              <ul className="space-y-2 text-foreground/80 mb-4">
                <li>Transparency in how AI systems use your data</li>
                <li>Bias reduction and fairness in automated decisions</li>
                <li>Data minimization and purpose limitation</li>
                <li>Human oversight of AI-driven processes</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                We comply with applicable data protection regulations, including GDPR, CCPA, and other relevant privacy
                laws.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Changes to this Privacy Policy</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                For significant changes, we will provide more prominent notice, including email notification or a notice
                on our website homepage.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:creativeflowadvertising@gmail.com" className="text-accent hover:underline">
                    creativeflowadvertising@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+13039038733" className="text-accent hover:underline">
                    (303) 903-8733
                  </a>
                </div>
                <div className="mt-4">
                  <Link href="/contact" className="text-accent hover:underline font-semibold">
                    Visit our Contact Page →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
