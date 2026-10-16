/**
 * Captain Investments Limited - Core Business Data & Configuration
 * Edit this file to update contact details, services, fleet items, hours, and feature flags.
 */

export interface FleetItem {
  id: string;
  name: string;
  category: 'Excavation' | 'Earth Moving' | 'Compaction' | 'Grading' | 'Haulage' | 'Drilling';
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
  subheading: 'Commercial & farm borehole drilling, mining soil sampling, and certified heavy earth-moving equipment hire across all of Zambia.',
  regionLabel: "Zambia's Trusted Specialists",
  phone: '+260 974 333 999',
  phoneFormatted: '+260 974 333 999',
  phoneRaw: '260974333999',
  telLink: 'tel:+260974333999',
  whatsappLink: 'https://wa.me/260974333999',
  email: 'captain.investmentsltd@gmail.com',
  mailtoLink: 'mailto:captain.investmentsltd@gmail.com',
  facebook: 'https://www.facebook.com/share/18Ei2y5w44/',
  instagram: 'https://www.instagram.com/invites/contact/?utm_content=ux175iy&psln=1125zfx629c2l',
  address: {
    city: 'Lusaka',
    province: 'All Provinces of Zambia',
    country: 'Zambia',
    full: 'Lusaka Headquarters with Nationwide Deployment Across Zambia',
  },
  coverageNote: 'Headquartered in Lusaka with immediate machinery & drilling rig mobilization across Copperbelt, North-Western, Central, Southern, Eastern, Luapula, Northern, Muchinga, Western, and Lusaka provinces.',
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
 */
export const FEATURE_FLAGS = {
  SHOW_STATS_COUNTERS: false,
  ENABLE_3D_WEBGL: true,
  ENABLE_CUSTOM_CURSOR: false,
  ENABLE_SMOOTH_SCROLL: false,
} as const;

/**
 * Core Services provided by Captain Investments Limited
 */
export const SERVICES = [
  {
    id: 'borehole-drilling',
    title: 'Borehole Drilling & Water Systems',
    shortDesc: 'Commercial borehole drilling for farms and mining, core drilling for mining soil sample collection, elevated tank stands, storage tanks, and solar/electric pump sets across Zambia.',
    heroSubtitle: 'High-yield groundwater systems and geological exploratory drilling for agriculture, commercial developments, and mining operations across Zambia.',
    href: '/services/borehole-drilling',
    iconName: 'Droplets',
    features: [
      'Commercial Borehole Drilling for Agricultural Farms & Irrigation Schemes',
      'Industrial & Mining Borehole Drilling and High-Volume Dewatering',
      'Exploratory Core Drilling for Mining Soil & Geological Sample Collection',
      'Engineered Elevated Steel Tank Stands (Custom Heights 3m to 12m+)',
      'High-Capacity Water Storage Tanks (5,000L, 10,000L & 20,000L+)',
      'Solar-Powered Submersible Pump Sets (Zero-Grid Running Costs)',
      'Single & Three-Phase Electric Submersible Pump Sets with Control Panels',
      'Hydrogeological Surveys, Class-9 uPVC Casing, Gravel Packing & Step Drawdown Testing',
    ],
  },
  {
    id: 'earth-movers-hire',
    title: 'Earth Movers & Heavy Plant for Hire',
    shortDesc: 'Heavy hydraulic excavators (21 to 38 Tons), single stance (30T) & double stance (40T) tipper trucks, bulldozers, graders, rollers, and drilling rigs for hire across Zambia with experienced operators included.',
    heroSubtitle: 'Modern heavy machinery fleet ready for prompt mobilization to commercial, mining, civil, and agricultural projects nationwide.',
    href: '/services/equipment-hire',
    iconName: 'Tractor',
    features: [
      'Dry Hire: Heavy machine supplied with our certified operator (client provides fuel)',
      'Wet Hire: Full turnkey package with heavy machine, certified operator, and all fuel/maintenance',
      'Heavy Hydraulic Excavators ranging from 21 Tonnes up to 38 Tonnes with rock breaker booms',
      'Single Stance Tipper Trucks (30 Tonnes) & Double Stance Tipper Trucks (40 Tonnes)',
      'Heavy Rotary DTH Borehole Drilling Rigs available for hire base',
      'Tracked Bulldozers, Articulated Motor Graders, Wheel Loaders & Soil Compactors',
      'Dedicated multi-axle heavy lowbed transport ensuring prompt mobilization across Zambia',
      'Strict preventive maintenance protocols for near-zero job-site downtime',
    ],
  },
] as const;

/**
 * 11 Machinery & Equipment items in the Fleet
 * (No brand names used; verified client media and specifications)
 */
export const FLEET_MACHINES: FleetItem[] = [
  {
    id: 'excavator-rocks',
    name: 'Heavy Hydraulic Excavators (21 to 38 Tons)',
    category: 'Excavation',
    model: 'Tracked Heavy Excavator Series',
    description: 'High-power heavy crawler excavators ranging from 21 tonnes up to 38 tonnes. Engineered with reinforced heavy-duty booms, severe-duty rock buckets, and high hydraulic breakout forces for deep mining pits, hard rock breaking, and mass trenching.',
    image: '/images/excavator-rocks.jpg',
    specs: [
      { label: 'Operating Weight', value: '21.5 Tonnes to 38.0 Tonnes' },
      { label: 'Bucket Capacity', value: '1.2 m³ to 2.2 m³ Rock Buckets' },
      { label: 'Max Digging Depth', value: '6.6 m to 7.8 m' },
      { label: 'Attachments', value: 'Heavy Rock Breaker & Trenching Boom' },
    ],
    idealFor: ['Hard rock excavation', 'Mining pit digging & overburden strip', 'Deep foundation trenches', 'Dam & canal construction'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'tipper-single-stance',
    name: 'Single Stance Tipper Truck (30 Tons)',
    category: 'Haulage',
    model: 'Heavy Duty 6x4 Tipper',
    description: 'Rugged 6x4 single stance tipper truck with 30-tonne payload capacity and reinforced high-tensile steel tipping body. Built for high-cycle hauling of quarry aggregate, sand, gravel, and farm bulk materials across challenging terrain.',
    image: '/images/tipper-single-stand-30t.jpg',
    specs: [
      { label: 'Payload Capacity', value: '30 Tonnes' },
      { label: 'Axle Configuration', value: 'Single Stance (6x4 Heavy Drive)' },
      { label: 'Body Type', value: 'Reinforced Steel Dump Box' },
      { label: 'Tipping Mechanism', value: 'Front-Mount High-Pressure Hydraulic Ram' },
    ],
    idealFor: ['Aggregate & gravel haulage', 'Road construction sub-base delivery', 'Farm bulk transport', 'Civil construction site logistics'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'tipper-double-stance',
    name: 'Double Stance Tipper Truck (40 Tons)',
    category: 'Haulage',
    model: 'Heavy Duty 8x4 Multi-Axle Tipper',
    description: 'Massive 8x4 double stance multi-axle heavy tipper truck boasting 40-tonne payload rating. Heavy-duty suspension and severe-service tipping bin designed for high-tonnage mining haulage, bulk earthworks cut-and-fill, and overburden removal.',
    image: '/images/tipper-double-stand-40t.jpg',
    specs: [
      { label: 'Payload Capacity', value: '40 Tonnes' },
      { label: 'Axle Configuration', value: 'Double Stance (8x4 Multi-Axle)' },
      { label: 'Body Volume', value: 'High-Capacity Severe-Duty Mining Box' },
      { label: 'Chassis', value: 'Double-Reinforced Heavy Steel Frame' },
    ],
    idealFor: ['High-volume mining haulage', 'Bulk earthmoving cut & fill', 'Overburden strip transport', 'Major highway graveling projects'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'drilling-rig-hire',
    name: 'Heavy Rotary DTH Borehole Drilling Rig',
    category: 'Drilling',
    model: 'Truck-Mounted High-Pressure Percussion Rig',
    description: 'Complete high-pressure rotary down-the-hole (DTH) borehole drilling rig available on a hire basis across Zambia. Equipped with high-output pneumatic air compressor and tri-cone percussion tooling for deep farm irrigation, mining dewatering, and exploratory core sampling.',
    image: '/images/drilling-rig-truck.jpg',
    specs: [
      { label: 'Drilling Depth', value: 'Up to 150+ Meters' },
      { label: 'Compressor', value: 'High-Pressure Pneumatic Air Flush' },
      { label: 'Mounting', value: 'All-Terrain Heavy Truck Chassis' },
      { label: 'Tooling', value: 'Tri-Cone Carbide & DTH Hammer Bits' },
    ],
    idealFor: ['Commercial farm irrigation boreholes', 'Mining dewatering & process water', 'Soil sample collection drilling', 'Deep groundwater exploration'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'wheel-loader',
    name: 'Heavy Front Wheel Loader (3.0 m³)',
    category: 'Earth Moving',
    model: 'High-Capacity Articulated Loader',
    description: 'High-capacity four-wheel-drive front loader optimized for high-volume aggregate handling, stockpiling, soil clearance, and rapid truck loading on quarries and civil sites.',
    image: '/images/wheel-loader.jpg',
    specs: [
      { label: 'Bucket Capacity', value: '3.0 m³ Heavy Material Bucket' },
      { label: 'Operating Weight', value: '17.5 Tonnes' },
      { label: 'Power Rating', value: 'High-Torque Turbocharged Diesel' },
      { label: 'Drive System', value: 'Heavy Duty 4WD Articulated' },
    ],
    idealFor: ['High-cycle tipper truck loading', 'Quarry stockpile management', 'Bulk earthmoving & pad clearing', 'Civil construction site handling'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'bulldozer',
    name: 'Heavy Crawler Bulldozer (30 Tons)',
    category: 'Earth Moving',
    model: 'Tracked Heavy Dozer with Ripper',
    description: 'Heavy track dozer equipped with semi-U high-capacity blade and heavy-duty single-shank ripper. Essential for clearing virgin bush, rock ripping, mass cut-and-fill grading, and access road construction across Zambia.',
    image: '/images/bulldozer.jpg',
    specs: [
      { label: 'Operating Weight', value: '29.7 Tonnes' },
      { label: 'Blade Capacity', value: '5.2 m³ Semi-U Blade' },
      { label: 'Ripper Type', value: 'Adjustable Parallelogram Heavy Shank' },
      { label: 'Track System', value: 'Severe-Service Sealed & Lubricated Tracks' },
    ],
    idealFor: ['Virgin bush clearing', 'Mass cut & fill bulk earthworks', 'Access road pioneer cutting', 'Rock ripping & overburden strip'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'motor-grader',
    name: 'Heavy Articulated Motor Grader',
    category: 'Grading',
    model: 'Precision Articulated Road Grader',
    description: 'Precision articulated motor grader with 14-foot moldboard and integrated scarifier for precision road finishing, camber shaping, drainage ditch cutting, and gravel leveling.',
    image: '/images/motor-grader.jpg',
    specs: [
      { label: 'Blade Width', value: '4.27 m (14 ft) Heavy Moldboard' },
      { label: 'Operating Weight', value: '16.8 Tonnes' },
      { label: 'Articulation', value: '20° Left / Right' },
      { label: 'Attachments', value: 'Rear Scarifier & Multi-Tooth Ripper' },
    ],
    idealFor: ['Mining haul road maintenance', 'Subgrade precision trimming', 'Stormwater ditching', 'Gravel road construction & re-sheeting'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'soil-compactor',
    name: 'Heavy Soil Compactor Roller (11 Tons)',
    category: 'Compaction',
    model: 'Single Drum Vibratory Compactor',
    description: 'High-amplitude single drum vibratory soil compactor ensuring maximum soil density, road sub-base compaction, and structural foundation stability.',
    image: '/images/soil-compactor.jpg',
    specs: [
      { label: 'Operating Weight', value: '11.2 Tonnes' },
      { label: 'Drum Width', value: '2,134 mm' },
      { label: 'Vibration Freq.', value: 'Dual Amplitude (30 / 35 Hz)' },
      { label: 'Gradeability', value: '55% Climbing Ability' },
    ],
    idealFor: ['Road sub-base compaction', 'Building slab preparation', 'Embankment stabilization', 'Runway subgrades'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'backhoe-sunset',
    name: 'Dual-Purpose Backhoe Loader (4-in-1)',
    category: 'Excavation',
    model: 'Industrial Heavy Duty Backhoe',
    description: 'Versatile multi-purpose machine equipped with 4-in-1 front loader bucket, heavy-duty rear excavator boom, and hydraulic outriggers for urban trenching and site prep.',
    image: '/images/backhoe-sunset.jpg',
    specs: [
      { label: 'Front Shovel', value: '1.1 m³ (4-in-1 Clamshell)' },
      { label: 'Rear Dig Depth', value: '4.8 m' },
      { label: 'Reach at Ground', value: '5.8 m' },
      { label: 'Transmission', value: 'Heavy Duty 4WD Synchromesh' },
    ],
    idealFor: ['Utility pipeline trenching', 'Plot leveling & backfilling', 'Agricultural irrigation ditching', 'Building foundation footings'],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'two-backhoes',
    name: 'Truck-Mounted Rotary Borehole & Soil Sampling Rig',
    category: 'Drilling',
    model: 'Multi-Axle Heavy DTH Rig Carrier',
    description: 'Specialized truck-mounted rotary borehole rig with integrated high-pressure air compressor. Configured for commercial farm boreholes, deep mine water wells, and precision drilling for mining soil sample collections across all provinces of Zambia.',
    image: '/images/two-backhoes.jpg',
    specs: [
      { label: 'Drilling Depth', value: 'Up to 150+ Meters' },
      { label: 'Compressor', value: 'High-Pressure Pneumatic Air Flush' },
      { label: 'Rig Chassis', value: 'Multi-Axle Heavy All-Terrain Carrier' },
      { label: 'Soil Sampling', value: 'Mining Core & Sample Collection Holes' },
    ],
    idealFor: [
      'Commercial farm borehole drilling',
      'Mining soil sample collection holes',
      'Solar & electric pump installations',
      'Tank & elevated tank stand setup',
    ],
    rateType: 'Hourly / Daily / Project',
  },
  {
    id: 'excavator-lowbed',
    name: 'Multi-Axle Heavy Lowbed Transporter (50+ Tons)',
    category: 'Haulage',
    model: 'Multi-Axle Heavy Haulage Transport Rig',
    description: 'Heavy-haulage tractor and multi-axle lowbed trailer dedicated to rapid, safe site-to-site mobilization of our heavy earthmovers and drilling rigs anywhere across Zambia.',
    image: '/images/excavator-lowbed.jpg',
    specs: [
      { label: 'Payload Capacity', value: '50+ Tonnes Certified' },
      { label: 'Deck Length', value: '12.5 m Heavy Steel Bed' },
      { label: 'Suspension', value: 'Multi-Axle Heavy Duty Walking Beam' },
      { label: 'Compliance', value: 'Zambian Highway & Escort Certified' },
    ],
    idealFor: ['Heavy plant mobilization', 'Mining machine delivery', 'Cross-province haulage', 'Emergency equipment transfers'],
    rateType: 'Hourly / Daily / Project',
  },
];

/**
 * 4 Pillars: Why Choose Captain Investments Limited
 */
export const WHY_CHOOSE_US = [
  {
    id: 'operators',
    title: 'Certified Operators Included',
    subtitle: 'Provided on Both Wet & Dry Hire',
    description: 'Every heavy machine and drilling rig is helmed by verified, seasoned operators who strictly follow safety protocols and optimize site productivity.',
    icon: 'ShieldCheck',
  },
  {
    id: 'nationwide-reach',
    title: 'Nationwide Zambia Deployment',
    subtitle: 'All 10 Provinces Covered',
    description: 'Headquartered in Lusaka with our in-house multi-axle lowbed logistics fleet ready to mobilize plant and drilling rigs anywhere in Zambia on short notice.',
    icon: 'Zap',
  },
  {
    id: 'modern-fleet',
    title: 'Modern, High-Capacity Plant',
    subtitle: 'Zero Unscheduled Downtime',
    description: 'From 21T–38T excavators to 30T & 40T tipper trucks and rotary rigs, our equipment undergoes strict preventive servicing for maximum reliability.',
    icon: 'Cog',
  },
  {
    id: 'fair-pricing',
    title: 'Transparent Project Rates',
    subtitle: 'No Hidden Mobilization Surprises',
    description: 'Clear, straightforward rates for wet or dry hire, and transparent per-meter borehole quotes tailored to Zambian geological conditions.',
    icon: 'BadgePercent',
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
    description: 'Scientific geophysical resistivity survey pinpoints underground fractures and high-yield aquifer zones for farm irrigation, mining, or domestic use, avoiding dry holes.',
    deliverables: ['Detailed hydrogeological survey report', 'Target depth projection', 'WARMA groundwater compliance assistance'],
  },
  {
    step: 2,
    title: 'High-Pressure Rotary DTH Drilling',
    strata: 'Weathered Rock & Quartzite',
    depth: '15m - 60m',
    color: '#606970',
    description: 'High-pressure pneumatic down-the-hole percussion hammer drills through tough dolomite, quartzite, and schists while sampling geological strata for mining core records.',
    deliverables: ['Rotary rock percussion drilling', 'Geological strata & soil sampling for mining', 'Continuous water strike monitoring'],
  },
  {
    step: 3,
    title: 'Class-9 Casing & Silica Gravel Pack',
    strata: 'Fractured Aquifer Zone',
    depth: '60m - 90m',
    color: '#2B4C7E',
    description: 'Installation of certified high-collapse Class-9 uPVC casing and precision slotted screens, packed with washed silica gravel to filter sediment and ensure crystal-clear water.',
    deliverables: ['Heavy-gauge class-9 uPVC casing', 'Precision slotted intake screens', 'Aquifer-protective silica gravel matrix'],
  },
  {
    step: 4,
    title: 'Pump Testing & Storage Commissioning',
    strata: 'Pristine Groundwater Table',
    depth: '90m - 150m+',
    color: '#0A5BB5',
    description: 'Continuous 4 to 8-hour step-drawdown test pumping certifies yield (m³/hr). We install turnkey solar or electric submersible pump sets, elevated steel tank stands, and storage tanks.',
    deliverables: ['Certified yield test report (m³/hr)', 'Solar or electric submersible pump set installation', 'Elevated steel tank stand & water tank setup'],
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
