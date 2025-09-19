"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react"

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-accent/20">
              {"🇳🇬 Built for Nigerians, powered by blockchain technology"}
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            Earn with Your Naira: Deposit, Convert, and Grow with <span className="text-accent">Zamani Tech</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Get early access to Zamani Tech – the platform that lets you deposit Naira, convert it to USDC, and earn
            daily yields on your savings. Join our exclusive waitlist now and be the first to experience the future of
            savings.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-foreground">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                Bank-Level Security
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">
                Your funds are protected with cutting-edge encryption and multi-layered security protocols.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-foreground">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                Daily Yields
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">
                Earn competitive daily returns on your USDC deposits, powered by blockchain technology.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-foreground">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                Instant Conversion
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">
                Convert your Naira to USDC seamlessly with real-time exchange rates.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
