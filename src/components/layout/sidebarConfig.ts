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
    subheader: 'sidebar.overview',
    items: [
      { label: 'sidebar.app', icon: HomeIcon, path: '/app' },
      { label: 'sidebar.ecommerce', icon: ShoppingCartIcon, path: '/ecommerce' },
      { label: 'sidebar.analytics', icon: BarChartIcon, path: '/analytics' },
      { label: 'sidebar.banking', icon: AccountBalanceIcon, path: '/banking' },
      { label: 'sidebar.booking', icon: EventSeatIcon, path: '/booking' },
      { label: 'sidebar.file', icon: FileIcon, path: '/file' },
      { label: 'sidebar.course', icon: SchoolIcon, path: '/course' },
    ],
  },
  {
    subheader: 'sidebar.management',
    items: [
      {
        label: 'sidebar.user',
        icon: PersonIcon,
        children: [
          { label: 'sidebar.profile', path: '/user/profile', icon: PersonIcon },
          { label: 'sidebar.cards', path: '/user/cards', icon: PersonIcon },
          { label: 'sidebar.list', path: '/user/list', icon: PersonIcon },
          { label: 'sidebar.create', path: '/user/create', icon: PersonIcon },
          { label: 'sidebar.edit', path: '/user/edit', icon: PersonIcon },
          { label: 'sidebar.account', path: '/user/account', icon: PersonIcon },
        ],
      },
      { label: 'sidebar.product', icon: StoreIcon, path: '/product', children: [] },
      { label: 'sidebar.order', icon: ListAltIcon, path: '/order', children: [] },
      { label: 'sidebar.invoice', icon: ReceiptIcon, path: '/invoice', children: [] },
      { label: 'sidebar.blog', icon: BlogIcon, path: '/blog', children: [] },
      { label: 'sidebar.job', icon: WorkIcon, path: '/job', children: [] },
      { label: 'sidebar.tour', icon: TourIcon, path: '/tour', children: [] },
      { label: 'sidebar.file_manager', icon: FolderIcon, path: '/file-manager' },
      { label: 'sidebar.mail', icon: MailIcon, path: '/mail', badge: '+32', badgeColor: 'error' },
      { label: 'sidebar.chat', icon: ChatIcon, path: '/chat' },
      { label: 'sidebar.calendar', icon: CalendarIcon, path: '/calendar' },
      { label: 'sidebar.kanban', icon: KanbanIcon, path: '/kanban' },
    ],
  },
  {
    subheader: 'sidebar.misc',
    items: [
      {
        label: 'sidebar.permission',
        icon: SecurityIcon,
        path: '/permission',
        caption: 'sidebar.permission_caption',
      },
      { label: 'sidebar.level', icon: TuneIcon, path: '/level', children: [] },
      { label: 'sidebar.disabled', icon: BlockIcon, path: '/disabled', disabled: true },
      {
        label: 'sidebar.label',
        icon: LabelIcon,
        path: '/label',
        chipLabel: 'sidebar.new',
        chipColor: 'info',
      },
    ],
  },
];

export default sidebarConfig;
