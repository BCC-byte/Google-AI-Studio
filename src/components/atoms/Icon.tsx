import React from 'react';
import {
  Shield,
  Wifi,
  Home,
  Building2,
  Cpu,
  Zap,
  Activity,
  Radio,
  Lock,
  Unlock,
  Eye,
  Sparkles,
  Sliders,
  Layers,
  ChevronRight,
  CheckCircle,
  Globe,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Sun,
  Moon,
  Wind,
  Thermometer,
  BatteryCharging,
  ArrowUpRight,
  Compass,
  KeyRound,
  Server,
  Network,
  Video,
  Power,
  RefreshCw,
  Bell,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  wifi: Wifi,
  home: Home,
  building: Building2,
  cpu: Cpu,
  zap: Zap,
  activity: Activity,
  radio: Radio,
  lock: Lock,
  unlock: Unlock,
  eye: Eye,
  sparkles: Sparkles,
  sliders: Sliders,
  layers: Layers,
  chevronRight: ChevronRight,
  checkCircle: CheckCircle,
  globe: Globe,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  barChart: BarChart3,
  sun: Sun,
  moon: Moon,
  wind: Wind,
  thermometer: Thermometer,
  battery: BatteryCharging,
  arrowUpRight: ArrowUpRight,
  compass: Compass,
  key: KeyRound,
  server: Server,
  network: Network,
  video: Video,
  power: Power,
  refresh: RefreshCw,
  bell: Bell,
};

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = 'text-[#00D7F0]' }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent size={size} className={className} strokeWidth={1.75} />;
};

export default Icon;
