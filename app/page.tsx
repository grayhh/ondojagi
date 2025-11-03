"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Home() {
  const [activeSection, setActiveSection] = useState<"intro" | "location">("intro")

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-warm-bg/95 backdrop-blur-sm border-b border-warm-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-light tracking-wide text-warm-text">온도자기</h1>
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveSection("intro")}
              className={`text-base font-light transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-pointer ${
                activeSection === "intro" ? "text-warm-accent" : "text-warm-text-muted hover:text-warm-accent"
              }`}
            >
              소개
            </button>
            <button
              onClick={() => setActiveSection("location")}
              className={`text-base font-light transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-pointer ${
                activeSection === "location" ? "text-warm-accent" : "text-warm-text-muted hover:text-warm-accent"
              }`}
            >
              오시는 길
            </button>
          </nav>
        </div>
      </header>

      <HeroSlider />

      {/* Main Content */}
      <main className="pb-16">
        {activeSection === "intro" && <IntroSection />}
        {activeSection === "location" && <LocationSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-warm-border bg-warm-bg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-sm text-warm-text-muted text-center font-light">© 온도자기 Ondojagi</p>
        </div>
      </footer>
    </div>
  )
}

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      src: "/korean-pottery-studio-wide-angle-with-shelves-of-cer.jpg",
      alt: "Pottery studio interior",
    },
    {
      src: "/artisan-hands-working-on-pottery-wheel-close-up.jpg",
      alt: "Artisan at work",
    },
    {
      src: "/beautiful-korean-ceramic-collection-on-wooden-table.jpg",
      alt: "Ceramic collection",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden mt-[88px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-warm-bg w-8" : "bg-warm-bg/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function IntroSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16">
      {/* Introduction Text */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg md:text-xl leading-relaxed text-warm-text font-light text-balance">
          온도자기(ondojagi)는 손으로 빚은 작업의 온기와 한국 전통의 아름다움을 소중히 여기는 고요한 도자기 공방입니다.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-warm-text-muted font-light mt-6 text-balance">
          Ondojagi is a calm pottery studio that values the warmth of handmade work and the beauty of Korean tradition.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="aspect-[4/3] relative bg-warm-card rounded-sm overflow-hidden">
          <Image
            src="/korean-pottery-studio-interior-with-natural-light-.jpg"
            alt="Studio interior"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[4/3] relative bg-warm-card rounded-sm overflow-hidden">
          <Image
            src="/handmade-korean-ceramic-pottery-pieces-on-display.jpg"
            alt="Pottery pieces"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[4/3] relative bg-warm-card rounded-sm overflow-hidden">
          <Image
            src="/potter-hands-shaping-clay-on-pottery-wheel.jpg"
            alt="Pottery making process"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-[4/3] relative bg-warm-card rounded-sm overflow-hidden">
          <Image
            src="/minimalist-korean-ceramic-bowls-and-cups.jpg"
            alt="Ceramic collection"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function LocationSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16">
      {/* Location Text */}
      <div className="text-center mb-12">
        <p className="text-lg md:text-xl text-warm-text font-light text-balance">공방에서 직접 만나보세요</p>
        <p className="text-base text-warm-text-muted font-light mt-2">Visit us at our studio</p>
      </div>

      {/* Map Container */}
      <div className="aspect-video bg-warm-card rounded-sm overflow-hidden border border-warm-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.567890123456!2d127.1234567!3d35.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzI0LjQiTiAxMjfCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio location map"
        />
      </div>

      {/* Address Information */}
      <div className="mt-8 text-center">
        <p className="text-base text-warm-text-muted font-light">전북 전주시 완산구 서학3길 84</p>
        <p className="text-sm text-warm-text-muted font-light mt-1">
          84, Seohak 3-gil, Wansan-gu, Jeonju-si, Jeollabuk-do
        </p>
      </div>
    </div>
  )
}
