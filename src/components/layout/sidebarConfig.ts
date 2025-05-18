import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  AccountBalance as AccountBalanceIcon,
  EventSeat as EventSeatIcon,
  InsertDriveFile as FileIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Store as StoreIcon,
  ListAlt as ListAltIcon,
  Receipt as ReceiptIcon,
  Description as BlogIcon,
  Work as WorkIcon,
  Tour as TourIcon,
  Folder as FolderIcon,
  Mail as MailIcon,
  Chat as ChatIcon,
  CalendarToday as CalendarIcon,
  ViewKanban as KanbanIcon,
  Security as SecurityIcon,
  Label as LabelIcon,
  Block as BlockIcon,
  Tune as TuneIcon,
} from '@mui/icons-material';

export interface SidebarItem {
  label: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  path?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  children?: SidebarItem[];
  caption?: string;
  chipLabel?: string;
  chipColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export interface SidebarSection {
  subheader: string;
  items: SidebarItem[];
}

const sidebarConfig: SidebarSection[] = [
  {
    subheader: 'OVERVIEW',
    items: [
      { label: 'App', icon: HomeIcon, path: '/app' },
      { label: 'Ecommerce', icon: ShoppingCartIcon, path: '/ecommerce' },
      { label: 'Analytics', icon: BarChartIcon, path: '/analytics' },
      { label: 'Banking', icon: AccountBalanceIcon, path: '/banking' },
      { label: 'Booking', icon: EventSeatIcon, path: '/booking' },
      { label: 'File', icon: FileIcon, path: '/file' },
      { label: 'Course', icon: SchoolIcon, path: '/course' },
    ],
  },
  {
    subheader: 'MANAGEMENT',
    items: [
      {
        label: 'User',
        icon: PersonIcon,
        children: [
          { label: 'Profile', path: '/user/profile', icon: PersonIcon },
          { label: 'Cards', path: '/user/cards', icon: PersonIcon },
          { label: 'List', path: '/user/list', icon: PersonIcon },
          { label: 'Create', path: '/user/create', icon: PersonIcon },
          { label: 'Edit', path: '/user/edit', icon: PersonIcon },
          { label: 'Account', path: '/user/account', icon: PersonIcon },
        ],
      },
      { label: 'Product', icon: StoreIcon, path: '/product', children: [] },
      { label: 'Order', icon: ListAltIcon, path: '/order', children: [] },
      { label: 'Invoice', icon: ReceiptIcon, path: '/invoice', children: [] },
      { label: 'Blog', icon: BlogIcon, path: '/blog', children: [] },
      { label: 'Job', icon: WorkIcon, path: '/job', children: [] },
      { label: 'Tour', icon: TourIcon, path: '/tour', children: [] },
      { label: 'File manager', icon: FolderIcon, path: '/file-manager' },
      { label: 'Mail', icon: MailIcon, path: '/mail', badge: '+32', badgeColor: 'error' },
      { label: 'Chat', icon: ChatIcon, path: '/chat' },
      { label: 'Calendar', icon: CalendarIcon, path: '/calendar' },
      { label: 'Kanban', icon: KanbanIcon, path: '/kanban' },
    ],
  },
  {
    subheader: 'MISC',
    items: [
      { label: 'Permission', icon: SecurityIcon, path: '/permission', caption: 'Only admin can see this item.' },
      { label: 'Level', icon: TuneIcon, path: '/level', children: [] },
      { label: 'Disabled', icon: BlockIcon, path: '/disabled', disabled: true },
      { label: 'Label', icon: LabelIcon, path: '/label', chipLabel: 'NEW', chipColor: 'info' },
    ],
  },
];

export default sidebarConfig; 