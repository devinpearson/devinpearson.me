import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events all around the world."
      intro="Speaking at events has really ignited my passion to share my work and entice peoples creativity."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://www.devconf.co.za/"
            title="Upcoming - Co-creating API Banking"
            description="A technical deep-dive into the Investec API, this technical walkthrough will demonstrate real-world applications and community-driven projects."
            event="ZA DevConf 2024"
            cta="Event Page"
          />
          <Appearance
            href="https://youtu.be/tmZvwh9syZY?si=9_hg0Bh5ugSe6ZC-"
            title="Shedding Some Light-ning on Lightning Integrations"
            description="I gave a technical breakdown on how my team experienced integrating with the lightning network, as one of the first projects to do it successfully."
            event="Magical Crypto Friends 2019"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Meetup Talks">
          <Appearance
            href="#"
            title="Investec Blockly - A new way to code"
            description="Demonstrated how you can use Blockly to create your own programmable card code for your Investec card using code blocks."
            event="Programmable Banking Meetup, March 2024"
            cta="Watch video - pending"
          />
          <Appearance
            href="https://www.meetup.com/johannesburg-ms-dev-user-group/events/299629750/"
            title="Co-creating API Banking"
            description="Demonstrated how Investec bank enables developers to access and interact with programmable cards and bank accounts."
            event="Johannesburg MS Developer User Group, March 2024"
            cta="Meetup Page"
          />
          <Appearance
            href="https://www.wits.ac.za/wsoa/"
            title="NFTs - The future of digital art"
            description="Guest Seminar at University of the Witwatersrand. I showed different ways that NFTs are being used in the art world and how they can be used to create new revenue streams for artists."
            event="Wits School of the Arts Creative Research Postgraduate Seminar and Workshop Programme, September 2022"
            cta="Wits School of the Arts"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
