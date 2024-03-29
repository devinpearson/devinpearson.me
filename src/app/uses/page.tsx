import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I dont often get asked about the tools I use but I thought that might change, so why not put together a list of the things I use daily. I will try to keep this up to date."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
        <Tool title="Mac mini, M1, 8GB RAM (2020)">
            I have been using this as my main workstation for the last year. It’s suprisingly powerful and I have been able to do all my work on it. Its been better than my Intel-based Macbook Pro. Originally I had ordered this just to test out apps I was building on the M1 chip and sat in the cupboard for a while.
          </Tool>
        <Tool title="16” MacBook Pro, Intel, 16GB RAM (2021)">
            I ordered this machine just as the M1 MacBook Pros were announced. I needed a machine that could run Windows and Linux VMs for work which took the M1 MacBooks off the list. I eventually stopped using it as my daily driver when it permanently sounded like a jet engine was taking off while sitting on my desk.
          </Tool>
          <Tool title="34” LG Ultra Wide Screen">
            It has been a great monitor for me. I picked it up at a steal when one of the offices transitioned to remote work. It just works.
          </Tool>
          <Tool title="North Bayou Monitor Desk Mount">
            This saved my neck and back. I couldn’t find any monitor risers that were tall enough or adjustable enough to get my monitor to the right height so I went with a desk mount instead. Its also been great for online meetings as I can drop the screen down to bring my webcam to eye level. 
          </Tool>
          <Tool title="Kinesis Advantage360 Professional Keyboard">
            What a wild ride this keyboard has been, I’ve had it for close on a year. I hated it at first and had to force myself to use it. I found out very quickly that I couldn’t touch type at all before this keyboard. I’ve since changed all that and im a much faster typer now. I love the thumb keys and the split design. I have also found that I have less wrist pain since using it. I have a MX Keys keyboard for times when the Tactile Brown switches are too loud.
          </Tool>
          <Tool title="MX Master 3 Mouse">
            Became a reliable daily driver for me. I orginally got it with the MX Keys keyboard so that I could switch between my Mac and Windows machine easily. I love the thumb scroll wheel and the ability to switch between devices easily.
          </Tool>
          <Tool title="Herman Miller Embody Chair">
            This chair ruined me. I can’t sit in any other chair now. I’ve had it for about 7 years now and it’s still as comfortable as the day I got it. They don’t even sell them in South Africa anymore so I bought 4 of them when our offices closed down.
          </Tool>
          <Tool title="Apple AirPods Max">
            Way overpriced but I love them. The noise cancelling is better than I have experienced on any other headphones. I love the sound quality. The case is the worst thing about them. All they needed to do was add a power switch and I would be happy.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            VS Code has become my go to editor. I’ve seen as my Intel Mac and my limited M1 Mac mini have aged, VS Code has been one of the few IDEs that have been better with resources.
          </Tool>
          <Tool title="iTerm2">
            It works. I have no idea what the difference is between it and the default terminal but it works.
          </Tool>
          <Tool title="GitHub Desktop">
            I know so many people turn their noses up at GUIs for git but I love it. I can see what I’m doing and I can see what I’m about to do. So often people commit files they didn’t mean to because they either commit all or blindly commit files they are testing in. It’s far less complex than GitKraken and I don’t need to pay for it. I use the Git CLI when I need to do more complex things.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Clean Shot X">
            Amazing tool for taking screenshots and recording videos. I use it all the time for documentation and bug reports. You’re able to do a lot of editing in the app before saving the image or video. The scrolling screenshot feature is amazing. The background removal feature is also great.
          </Tool>
          <Tool title="Apple Notes">
            I use this for almost all my note taking. I love the fact that they are natively available on all my devices. I use Notion for more structured notes but for quick notes and lists I use Apple Notes.
          </Tool>
          <Tool title="Spotify">
            Can’t do without my music. I usually listen to random mixes and playlists. I find they are better at giving me music I like more than Apple Music does.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
