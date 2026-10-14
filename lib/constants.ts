/**
 * Captain Investments Limited - Core Business Data & Configuration
 * Edit this file to update contact details, services, fleet items, hours, and feature flags.
 */

export interface FleetItem {
  id: string;
  name: string;
  category: 'Excavation' | 'Earth Moving' | 'Compaction' | 'Grading' | 'Haulage';
  model: string;
  description: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  idealFor: string[];
  rateType: 'Hourly / Daily / Project';
}

export interface BoreholeStep {
  step: number;
  title: string;
  strata: string;
  depth: string;
  color: string;
  description: string;
  deliverables: string[];
}

export const BUSINESS_INFO = {
  name: 'Captain Investments Limited',
  tagline: 'We Drill. We Dig. We Deliver.',
  subheading: 'Boreholes and heavy equipment hire across Lusaka and Zambia.',
  phone: '+260 974 333 999',
  phoneFormatted: '+260 974 333 999',
  phoneRaw: '260974333999',
  telLink: 'tel:+260974333999',
  whatsappLink: 'https://wa.me/260974333999',
  email: 'captain.investmentsltd@gmail.com',
  mailtoLink: 'mailto:captain.investmentsltd@gmail.com',
  facebook: 'https://www.facebook.com/share/18Ei2y5w44/',
  address: {
    city: 'Lusaka',
    country: 'Zambia',
    full: 'Lusaka, Zambia',
  },
  hours: {
    days: 'Monday to Saturday',
    time: '08:00 - 17:00',
    sunday: 'Closed',
    openHour: 8,
    closeHour: 17,
    timezone: 'Africa/Lusaka',
  },
  yearEstablished: 2020,
} as const;

/**
 * Feature Flags
 * Set SHOW_STATS_COUNTERS to true once confirmed by client.
 */
export const FEATURE_FLAGS = {
  // TODO_CLIENT_TO_CONFIRM: Replace placeholder counters with certified client metrics before toggling on
  SHOW_STATS_COUNTERS: false,
  ENABLE_3D_WEBGL: true,
  ENABLE_CUSTOM_CURSOR: true,
  ENABLE_SMOOTH_SCROLL: true,
} as const;

/**
 * Verified Services provided by Captain Investments Limited
 */
export const SERVICES = [
  {
    id: 'borehole-drilling',
    title: 'Borehole Drilling',
    shortDesc: 'End-to-end commercial & residential groundwater solutions from geophysical survey to turnkey pump commissioning.',
    heroSubtitle: 'Sustainable, high-yield clean groundwater delivered across Lusaka & greater Zambia.',
    href: '/services/borehole-drilling',
    iconName: 'Droplets',
    features: [
      'Comprehensive Hydrogeological & Geophysical Ground Survey',
      'High-Pressure DTH Rotary Percussion Drilling',
      'Heavy-Gauge uPVC Screen & Casing Installation',
      'Clean Silica Gravel Packing & Aquifer Sealing',
      'Step-Drawdown Test Pumping & Yield Certification',
      'Complete Solar, Electric Submersible & Tank Stand Setup',
    ],
  },
  {
    id: 'earth-movers-hire',
    title: 'Earth Movers for Hire',
    shortDesc: 'Modern, well-maintained fleet of heavy excavation, grading, compaction, and haulage machinery with certified operators.',
    heroSubtitle: 'Heavy machinery ready for rapid deployment to commercial, mining, civil, and farm sites in Zambia.',
    href: '/services/equipment-hire',
    iconName: 'Tractor',
    features: [
      'Flexible Wet (with fuel & operator) or Dry Hire packages',
      'Fully certified, safety-trained heavy machinery operators',
      'Rapid lowbed trailer mobilization to any site in Zambia',
      'Strict preventive maintenance for near-zero site downtime',
      'Earthworks, trenching, road grading, pad clearing & compaction',
      'Competitive daily, weekly, and project-based contract terms',
    ],
  },
] as const;

/**
 * 8 Verified Machinery in the Fleet from client supplied media
 */
export const FLEET_MACHINES: FleetItem[] = [
  {
    id: 'wheel-loader',
    name: 'SDLG Wheel Loader',
    category: 'Earth Moving',
    model: 'Heavy Duty Quarry Spec',
    description: 'High-capacity front loader optimized for high-volume aggregate handling, stockpiling, soil clearance, and rapid truck loading.',
    image: '/images/wheel-loader.jpg',
    specs: [
      { label: 'Bucket Capacity', value: '3.0 m³' },
      { label: 'Operating Weight', value: '17.5 Tonnes' },
      { label: 'Power', value: '162 kW / 220 HP' },
      { label: 'Drive', value: '4WD Articulated' },
    ],
    idealFor: ['Aggregate loading', 'Quarry stockpile management', 'Bulk earthmoving', 'Civil site clearing'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'excavator-rocks',
    name: 'SANY Heavy Excavator',
    category: 'Excavation',
    model: 'SY215C Tracked Excavator',
    description: 'Rugged crawler excavator with high breakout force, reinforced boom, and armored bucket built for hard rock breaking and deep trenching.',
    image: '/images/excavator-rocks.jpg',
    specs: [
      { label: 'Operating Weight', value: '22 Tonnes' },
      { label: 'Max Dig Depth', value: '6.6 m' },
      { label: 'Bucket Volume', value: '1.2 m³' },
      { label: 'Engine', value: 'Cummins Turbo Diesel' },
    ],
    idealFor: ['Hard rock excavation', 'Foundation trenches', 'Basement digging', 'Dam construction'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'two-backhoes',
    name: 'BULL Dual Backhoe Loaders',
    category: 'Earth Moving',
    model: 'BULL Heavy Duty Loader Duo',
    description: 'Versatile dual-purpose workhorses with 4-in-1 multi-purpose front shovel and powerful rear excavating backhoe arm.',
    image: '/images/two-backhoes.jpg',
    specs: [
      { label: 'Front Bucket', value: '1.1 m³ (4-in-1)' },
      { label: 'Rear Dig Depth', value: '4.8 m' },
      { label: 'Transmission', value: 'Synchromesh 4WD' },
      { label: 'Stabilizers', value: 'Hydraulic Outriggers' },
    ],
    idealFor: ['Utility pipeline trenching', 'Plot leveling', 'Site cleanup', 'Foundation footings'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'soil-compactor',
    name: 'Volvo Soil Compactor Roller',
    category: 'Compaction',
    model: 'Volvo SD110C Single Drum',
    description: 'High-amplitude vibratory soil compactor ensuring maximum soil density, road base compaction, and structural foundation integrity.',
    image: '/images/soil-compactor.jpg',
    specs: [
      { label: 'Operating Weight', value: '11.2 Tonnes' },
      { label: 'Drum Width', value: '2,134 mm' },
      { label: 'Vibration Freq.', value: '30 / 35 Hz' },
      { label: 'Gradeability', value: '55%' },
    ],
    idealFor: ['Road sub-base compaction', 'Building slab preparation', 'Embankment stabilization', 'Runway subgrades'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'backhoe-sunset',
    name: 'BULL HD 100 Backhoe',
    category: 'Excavation',
    model: 'BULL HD 100 Heavy Duty',
    description: 'High-torque industrial backhoe loader equipped with extra heavy-duty kingpost, reinforced chassis, and ergonomic operator cabin.',
    image: '/images/backhoe-sunset.jpg',
    specs: [
      { label: 'Horsepower', value: '100 HP Turbo' },
      { label: 'Reach at Ground', value: '5.8 m' },
      { label: 'Dump Height', value: '3.6 m' },
      { label: 'Fuel Capacity', value: '140 L' },
    ],
    idealFor: ['Urban utility digs', 'Agricultural drainage', 'Material backfilling', 'Site preparation'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'excavator-lowbed',
    name: 'Heavy Lowbed Transporter',
    category: 'Haulage',
    model: 'Scania Heavy Haul + Multi-Axle Lowbed',
    description: 'Dedicated heavy-haulage lowbed transport rig ensuring prompt, safe site-to-site delivery of heavy earthmovers anywhere in Zambia.',
    image: '/images/excavator-lowbed.jpg',
    specs: [
      { label: 'Payload Capacity', value: '50+ Tonnes' },
      { label: 'Deck Length', value: '12.5 m' },
      { label: 'Suspension', value: 'Multi-axle Heavy Duty' },
      { label: 'Escort Compliant', value: 'Zambian Highway Certified' },
    ],
    idealFor: ['Heavy plant mobilization', 'Mining transport', 'Cross-province haulage', 'Emergency machine transfers'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'bulldozer',
    name: 'CAT D7 Heavy Crawler Bulldozer',
    category: 'Earth Moving',
    model: 'Caterpillar D7 Tracked Dozer',
    description: 'Pioneering heavy track dozer with semi-U blade and heavy-duty single-shank ripper for clearing raw bush, ripping rock, and mass grading.',
    image: '/images/bulldozer.jpg',
    specs: [
      { label: 'Operating Weight', value: '29.7 Tonnes' },
      { label: 'Net Power', value: '197 kW / 265 HP' },
      { label: 'Blade Capacity', value: '5.2 m³' },
      { label: 'Ripper', value: 'Adjustable Parallelogram' },
    ],
    idealFor: ['Virgin bush clearing', 'Mass cut & fill', 'Access road cutting', 'Rock ripping & overburden strip'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'motor-grader',
    name: 'CAT Motor Grader',
    category: 'Grading',
    model: 'Caterpillar Precision Grader',
    description: 'Precision articulate motor grader with 14-foot moldboard and integrated scarifier for precision road finishing, camber shaping, and ditch cutting.',
    image: '/images/motor-grader.jpg',
    specs: [
      { label: 'Blade Width', value: '4.27 m (14 ft)' },
      { label: 'Operating Weight', value: '16.8 Tonnes' },
      { label: 'Articulation', value: '20° Left / Right' },
      { label: 'Engine', value: 'Cat C7.1 ACERT' },
    ],
    idealFor: ['Haul road maintenance', 'Subgrade precision trimming', 'Stormwater ditching', 'Gravel road re-sheeting'],
    rateType: 'Hourly / Daily / Project',
  },
];

/**
 * 4 Pillars: Why Choose Captain Investments Limited
 */
export const WHY_CHOOSE_US = [
  {
    id: 'operators',
    title: 'Certified Expert Operators',
    subtitle: 'Trained & Safety Compliant',
    description: 'Every earth-moving machine is helmed by verified, seasoned operators who strictly follow safety protocols and optimize site productivity.',
    icon: 'ShieldCheck',
  },
  {
    id: 'modern-fleet',
    title: 'Modern, Serviced Fleet',
    subtitle: 'Zero Unscheduled Downtime',
    description: 'Our loaders, excavators, and compactors undergo continuous preventative maintenance so your construction schedule stays uninterrupted.',
    icon: 'Cog',
  },
  {
    id: 'fair-pricing',
    title: 'Transparent, Fair Rates',
    subtitle: 'No Hidden Mobilization Surprises',
    description: 'Clear, straightforward rates for wet or dry hire, and transparent per-meter borehole quotes tailored to Lusaka geology.',
    icon: 'BadgePercent',
  },
  {
    id: 'fast-response',
    title: 'Rapid Response & Deployment',
    subtitle: 'Lusaka & Across Zambia',
    description: 'In-house lowbed logistics guarantee rapid mobilization to your site across Lusaka province, Copperbelt, and regional hubs.',
    icon: 'Zap',
  },
] as const;

/**
 * 4 Steps of Borehole Drilling (Drill Descent Scroll Experience)
 */
export const BOREHOLE_PROCESS_STEPS: BoreholeStep[] = [
  {
    step: 1,
    title: 'Hydrogeological Survey & Siting',
    strata: 'Topsoil & Subsoil Layer',
    depth: '0m - 15m',
    color: '#8B5A2B',
    description: 'Scientific resistivity surveying identifies underground fractures and primary aquifer zones, avoiding dry holes and septic contamination.',
    deliverables: ['Detailed hydrogeological report', 'Target depth projection', 'Water Resources Management Authority (WARMA) compliance assistance'],
  },
  {
    step: 2,
    title: 'High-Pressure Percussion Drilling',
    strata: 'Weathered Rock & Quartzite',
    depth: '15m - 60m',
    color: '#606970',
    description: 'DTH down-the-hole hammer drills through tough Lusaka dolomite, limestone, and schists using high-pressure pneumatic compressors.',
    deliverables: ['Rotary rock drilling', 'Geological strata sampling', 'Continuous water strike observation'],
  },
  {
    step: 3,
    title: 'Casing & Graded Gravel Packing',
    strata: 'Fractured Aquifer Zone',
    depth: '60m - 90m',
    color: '#2B4C7E',
    description: 'Installation of certified high-collapse uPVC casing and slotted screens, packed with round silica gravel to prevent silt and guarantee crystal-clear water.',
    deliverables: ['Heavy-gauge class-9 uPVC casing', 'Precision slotted intake screens', 'Aquifer-protective silica gravel matrix'],
  },
  {
    step: 4,
    title: 'Yield Test Pumping & Commissioning',
    strata: 'Pristine Groundwater Table',
    depth: '90m - 120m+',
    color: '#0A5BB5',
    description: 'Rigorous 4 to 8-hour continuous step-drawdown test pumping determines sustainable cubic-meter yield per hour. Clean water rises!',
    deliverables: ['Accurate yield certification (m³/hr)', 'Water quality chemical testing', 'Turnkey solar/electric pump sizing & installation'],
  },
];

/**
 * Navigation items for Multi-Page layout
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet & Plant', href: '/fleet' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
