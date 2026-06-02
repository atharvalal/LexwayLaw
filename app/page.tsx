import Hero from '@/components/sections/Hero'
import PracticeAreas from '@/components/sections/PracticeAreas'
import WhyChoose from '@/components/sections/WhyChoose'
import AwardsRecognition from '@/components/sections/AwardsRecognition'
import TeamPreview from '@/components/sections/TeamPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <AwardsRecognition />
      <PracticeAreas />
      <TeamPreview />
      <BlogPreview />
      <CTABanner />
    </>
  )
}
