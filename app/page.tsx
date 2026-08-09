import { PaintFlowBackground } from "@/components/paint-flow-background"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Finishes } from "@/components/finishes"
import { Work } from "@/components/work"
import { Quote } from "@/components/quote"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <PaintFlowBackground />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <Finishes />
        <Work />
        <Quote />
      </main>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </>
  )
}
