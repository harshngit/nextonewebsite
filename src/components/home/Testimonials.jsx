import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote, Star } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/projects'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-gold-50/30">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Homeowners Say"
          subtitle="Real stories from families and businesses who found their address with Nextone Realty."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="bg-white rounded-2xl border border-gold-100 p-7 h-full flex flex-col shadow-sm">
                  <Quote className="text-gold-400 mb-4" size={28} />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-charcoal/70 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gold-100">
                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-charcoal/45">{t.project}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
