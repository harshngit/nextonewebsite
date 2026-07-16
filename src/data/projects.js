export const projectTypes = ['Apartment', 'Villa', 'Plot', 'Commercial']
export const projectStatuses = ['Ongoing', 'Upcoming', 'Completed']
export const cities = ['Pune', 'Mumbai', 'Nagpur', 'Nashik']

export const projects = [
  {
    id: 1,
    slug: 'nextone-skyline-heights',
    name: 'Nextone Skyline Heights',
    type: 'Apartment',
    status: 'Ongoing',
    city: 'Pune',
    location: 'Baner, Pune',
    price: '₹78 L – ₹1.4 Cr',
    area: '780 – 1450 sq.ft',
    configuration: '2, 3 & 4 BHK',
    image: 'https://picsum.photos/seed/nextone-skyline/900/650',
    gallery: [
      'https://picsum.photos/seed/nextone-skyline-1/1200/800',
      'https://picsum.photos/seed/nextone-skyline-2/1200/800',
      'https://picsum.photos/seed/nextone-skyline-3/1200/800',
    ],
    description:
      'A landmark high-rise offering sky lounges, panoramic city views and resort-style amenities in the heart of Baner.',
    amenities: ['Clubhouse', 'Infinity Pool', 'Gymnasium', 'Kids Play Area', '24x7 Security', 'Landscaped Gardens'],
    reraId: 'P52100012345',
    featured: true,
  },
  {
    id: 2,
    slug: 'nextone-emerald-villas',
    name: 'Nextone Emerald Villas',
    type: 'Villa',
    status: 'Ongoing',
    city: 'Pune',
    location: 'Bavdhan, Pune',
    price: '₹2.1 Cr – ₹3.6 Cr',
    area: '2200 – 3400 sq.ft',
    configuration: '4 & 5 BHK Villas',
    image: 'https://picsum.photos/seed/nextone-villas/900/650',
    gallery: [
      'https://picsum.photos/seed/nextone-villas-1/1200/800',
      'https://picsum.photos/seed/nextone-villas-2/1200/800',
      'https://picsum.photos/seed/nextone-villas-3/1200/800',
    ],
    description:
      'Private gated villas with personal gardens, designed for families who want space, privacy and greenery.',
    amenities: ['Private Garden', 'Clubhouse', 'Jogging Track', 'Solar Power', 'Rainwater Harvesting', 'Gated Community'],
    reraId: 'P52100023456',
    featured: true,
  },
  {
    id: 3,
    slug: 'nextone-green-meadows',
    name: 'Nextone Green Meadows',
    type: 'Plot',
    status: 'Upcoming',
    city: 'Nashik',
    location: 'Gangapur Road, Nashik',
    price: '₹18 L – ₹42 L',
    area: '1200 – 3000 sq.ft plots',
    configuration: 'NA Residential Plots',
    image: 'https://picsum.photos/seed/nextone-meadows/900/650',
    gallery: [
      'https://picsum.photos/seed/nextone-meadows-1/1200/800',
      'https://picsum.photos/seed/nextone-meadows-2/1200/800',
      'https://picsum.photos/seed/nextone-meadows-3/1200/800',
    ],
    description:
      'Fully developed, RERA-approved NA plots with wide roads, avenue plantation and ready infrastructure.',
    amenities: ['Gated Layout', 'Underground Wiring', 'Avenue Plantation', 'Wide Internal Roads', 'Water Supply', 'Street Lighting'],
    reraId: 'P52100034567',
    featured: true,
  },
  {
    id: 4,
    slug: 'nextone-business-hub',
    name: 'Nextone Business Hub',
    type: 'Commercial',
    status: 'Ongoing',
    city: 'Mumbai',
    location: 'Andheri East, Mumbai',
    price: '₹1.2 Cr – ₹5.8 Cr',
    area: '350 – 2400 sq.ft',
    configuration: 'Offices & Retail Shops',
    image: 'https://picsum.photos/seed/nextone-business/900/650',
    gallery: [
      'https://picsum.photos/seed/nextone-business-1/1200/800',
      'https://picsum.photos/seed/nextone-business-2/1200/800',
      'https://picsum.photos/seed/nextone-business-3/1200/800',
    ],
    description:
      'A Grade-A commercial address with premium retail frontage and IT-enabled office floors near the metro corridor.',
    amenities: ['High-Speed Elevators', 'Food Court', 'Ample Parking', 'Power Backup', 'Metro Connectivity', 'Conference Center'],
    reraId: 'P52100045678',
    featured: false,
  },
  {
    id: 5,
    slug: 'nextone-riverside-residency',
    name: 'Nextone Riverside Residency',
    type: 'Apartment',
    status: 'Completed',
    city: 'Nagpur',
    location: 'Wardha Road, Nagpur',
    price: '₹52 L – ₹95 L',
    area: '620 – 1180 sq.ft',
    configuration: '1, 2 & 3 BHK',
    image: 'https://picsum.photos/seed/nextone-riverside/900/650',
    gallery: [
      'https://picsum.photos/seed/nextone-riverside-1/1200/800',
      'https://picsum.photos/seed/nextone-riverside-2/1200/800',
      'https://picsum.photos/seed/nextone-riverside-3/1200/800',
    ],
    description:
      'A completed, ready-to-move community along the river front with 200+ families already home.',
    amenities: ['Riverside Deck', 'Clubhouse', 'Swimming Pool', 'Amphitheatre', 'Multipurpose Hall', 'CCTV Surveillance'],
    reraId: 'P52100056789',
    featured: false,
  },
  {
    id: 6,
    slug: 'nextone-palm-county',
    name: 'Nextone Palm County',
    type: 'Villa',
    status: 'Upcoming',
    city: 'Nashik',
    location: 'Trimbak Road, Nashik',
    price: '₹1.4 Cr – ₹2.3 Cr',
    area: '1800 – 2600 sq.ft',
    configuration: '3 & 4 BHK Row Villas',
    image: 'https://picsum.photos/seed/nextone-palm/900/650',
    gallery: [
      'https://picsum.photos/seed/nextone-palm-1/1200/800',
      'https://picsum.photos/seed/nextone-palm-2/1200/800',
      'https://picsum.photos/seed/nextone-palm-3/1200/800',
    ],
    description:
      'Boutique row villas set among palm-lined avenues, blending resort living with everyday convenience.',
    amenities: ['Clubhouse', 'Tennis Court', 'Yoga Deck', 'Kids Play Area', 'EV Charging', 'Gated Security'],
    reraId: 'P52100067890',
    featured: true,
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

export const testimonials = [
  {
    id: 1,
    name: 'Rohan & Priya Deshmukh',
    project: 'Nextone Skyline Heights',
    quote:
      'From site visit to handover, the Nextone team was transparent at every step. Our 3BHK feels even better than the brochure promised.',
    avatar: 'https://picsum.photos/seed/nextone-avatar-1/200/200',
  },
  {
    id: 2,
    name: 'Anita Kulkarni',
    project: 'Nextone Riverside Residency',
    quote:
      "Best decision we made was booking early with Nextone Realty. Construction quality and timely possession — exactly as committed.",
    avatar: 'https://picsum.photos/seed/nextone-avatar-2/200/200',
  },
  {
    id: 3,
    name: 'Suresh Patil',
    project: 'Nextone Emerald Villas',
    quote:
      'The villa community is peaceful and well maintained. Their after-sales support team still responds within hours.',
    avatar: 'https://picsum.photos/seed/nextone-avatar-3/200/200',
  },
  {
    id: 4,
    name: 'Meera Joshi',
    project: 'Nextone Business Hub',
    quote:
      'We moved our office to Nextone Business Hub last year. Great location, professional management, zero regrets.',
    avatar: 'https://picsum.photos/seed/nextone-avatar-4/200/200',
  },
]

export const achievements = [
  { label: 'Projects Delivered', value: 42, suffix: '+' },
  { label: 'Happy Families', value: 3200, suffix: '+' },
  { label: 'Years of Trust', value: 15, suffix: '+' },
  { label: 'Cities Present', value: 4, suffix: '' },
]

export const milestones = [
  { year: '2010', title: 'Nextone Realty Founded', text: 'Started operations in Pune with our first residential plotting project.' },
  { year: '2014', title: 'First High-Rise Launch', text: 'Delivered our first apartment tower, marking entry into vertical living.' },
  { year: '2017', title: 'Expanded to Mumbai & Nagpur', text: 'Opened new offices and launched commercial developments.' },
  { year: '2020', title: '2000+ Families Milestone', text: 'Crossed 2000 happy families across our residential communities.' },
  { year: '2023', title: 'RERA Excellence Award', text: 'Recognized for regulatory compliance and on-time project delivery.' },
  { year: '2026', title: '40+ Projects Delivered', text: 'Continuing to grow across Maharashtra with 40+ completed developments.' },
]

export const awards = [
  { title: 'Best Residential Developer', year: '2023', body: 'Maharashtra Real Estate Awards' },
  { title: 'RERA Excellence Award', year: '2023', body: 'State Real Estate Regulatory Authority' },
  { title: 'Customer Trust Award', year: '2022', body: 'Realty+ Conclave' },
  { title: 'Fastest Growing Developer', year: '2021', body: 'CREDAI Pune Metro' },
]
