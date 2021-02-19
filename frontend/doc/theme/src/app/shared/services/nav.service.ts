import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false
	public fullScreen = false;

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Dashboard', icon: 'home', type: 'sub', badgeType: 'primary', badgeValue: 'new', active: false, children: [
				{ path: '/dashboard/default', title: 'Default', type: 'link' },
				{ path: '/dashboard/e-commerce', title: 'E-Commerce', type: 'link', },
				{ path: '/dashboard/university', title: 'University', type: 'link' },
				{ path: '/dashboard/bitcoin', title: 'Crypto', type: 'link' },
				{ path: '/dashboard/server', title: 'Server', type: 'link' },
				{ path: '/dashboard/project', title: 'Project', type: 'link' }
			]
		},
		{
			title: 'Widgets', icon: 'airplay', type: 'sub', active: false, children: [
				{ path: '/widgets/general', title: 'General', type: 'link' },
				{ path: '/widgets/chart', title: 'Chart', type: 'link' }
			]
		},
		{
			title: 'UI-Elements', icon: 'slack', type: 'sub', active: false, children: [
				{ path: '/ui-elements/avatars', title: 'Avatars', type: 'link' },
				{ path: '/ui-elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
				{ path: '/ui-elements/grid', title: 'Grid', type: 'link' },
				{ path: '/ui-elements/helper-classes', title: 'Helper-Classes', type: 'link' },
				{ path: '/ui-elements/list', title: 'List', type: 'link' },
				{ path: '/ui-elements/ribbons', title: 'Ribbons', type: 'link' },
				{ path: '/ui-elements/shadow', title: 'Shadow', type: 'link' },
				{ path: '/ui-elements/spinner', title: 'Spinner', type: 'link' },
				{ path: '/ui-elements/state-color', title: 'State-color', type: 'link' },
				{ path: '/ui-elements/steps', title: 'Steps', type: 'link' },
				{ path: '/ui-elements/tag-n-pills', title: 'Tag and Pills', type: 'link' },
				{ path: '/ui-elements/typography', title: 'Typography', type: 'link' }
			]
		},

		{
			title: 'Base', icon: 'box', type: 'sub', active: false, children: [
				{ path: '/base/accordion', title: 'Accordion', type: 'link' },
				{ path: '/base/alert', title: 'Alert', type: 'link' },
				{ path: '/base/buttons', title: 'Buttons', type: 'link' },
				{ path: '/base/carousel', title: 'Carousel', type: 'link' },
				{ path: '/base/collapse', title: 'Collapse', type: 'link' },
				{ path: '/base/datepicker', title: 'Datepicker', type: 'link' },
				{ path: '/base/dropdown', title: 'Dropdown', type: 'link' },
				{ path: '/base/modal', title: 'Modal', type: 'link' },
				{ path: '/base/pagination', title: 'Pagination', type: 'link' },
				{ path: '/base/popover', title: 'Popover', type: 'link' },
				{ path: '/base/progressbar', title: 'Progressbar', type: 'link' },
				{ path: '/base/rating', title: 'Rating', type: 'link' },
				{ path: '/base/tabset', title: 'Tabset', type: 'link' },
				{ path: '/base/timepicker', title: 'Timepicker', type: 'link' },
				{ path: '/base/tooltip', title: 'Tooltip', type: 'link' },
				{ path: '/base/typeahead', title: 'Typeahead', type: 'link' }
			]
		},
		{
			title: 'Advance', icon: 'folder-plus', type: 'sub', active: false, children: [
				{ path: '/advance/drag-drop', title: 'Drag and Drop', type: 'link' },
				{ path: '/advance/dropzone', title: 'Dropzone', type: 'link' },
				{ path: '/advance/crop', title: 'Image Cropper', type: 'link' },
				{ path: '/advance/toastr', title: 'Ngx Toastr', type: 'link' },
				{ path: '/advance/owl-carousel', title: 'Owl-Carousel', type: 'link' },
				{ path: '/advance/range-slider', title: 'Range Slider', type: 'link' },
				{ path: '/advance/scrollable', title: 'Scrollable', type: 'link' },
				{ path: '/advance/sticky', title: 'Sticky', type: 'link' },
				{ path: '/advance/sweetalert', title: 'SweetAlert', type: 'link' },
				{ path: '/advance/upload', title: 'Upload', type: 'link' }
			]
		},
		{
			title: 'Icons', icon: 'command', type: 'sub', active: false, children: [
				{ path: '/icons/flag', title: 'Flag icon', type: 'link' },
				{ path: '/icons/fontawesome', title: 'Fontawesome Icon', type: 'link' },
				{ path: '/icons/ico', title: 'Ico Icon', type: 'link' },
				{ path: '/icons/themify', title: 'Themify Icon', type: 'link' },
				{ path: '/icons/feather', title: 'Feather Icon', type: 'link' },
				{ path: '/icons/whether', title: 'Whether Icon', type: 'link' }
			]
		},
		{
			title: 'Buttons', icon: 'cloud', type: 'sub', active: false, children: [
				{ path: '/buttons/default', title: 'Default Style', type: 'link' },
				{ path: '/buttons/flat', title: 'Flat Style', type: 'link' },
				{ path: '/buttons/edge', title: 'Edge Style', type: 'link' },
				{ path: '/buttons/raised', title: 'Raised Style', type: 'link' },
				{ path: '/buttons/group', title: 'Button Group', type: 'link' }
			]
		},
		{
			title: 'Gallery', icon: 'book', type: 'sub', children: [
				{ path: '/gallery/gallery-grid', title: 'Gallery Grid', type: 'link' },
				{ path: '/gallery/gallery-desc', title: 'Gallery Grid With Desc', type: 'link' },
				{ path: '/gallery/mesonry', title: 'Masonry Gallery', type: 'link' },
				{ path: '/gallery/hover-effect', title: 'Hover Effect', type: 'link' }
			]
		},
		{
			title: 'Forms', icon: 'file-text', type: 'sub', active: false, children: [
				{
					title: 'Form Controls', type: 'sub', children: [
						{ path: '/form/validation', title: 'Form Validation', type: 'link' },
						{ path: '/form/inputs', title: 'Base Inputs', type: 'link' },
						{ path: '/form/checkbox-radio', title: 'Checkbox & Radio', type: 'link' },
						{ path: '/form/input-groups', title: 'Input Groups', type: 'link' },
						{ path: '/form/mega-options', title: 'Mega Options', type: 'link' }
					]
				},
				{ path: '/form/form-default', title: 'Form Default', type: 'link' },
				{ path: '/form/wizard', title: 'Ngx Wizard', type: 'link' }
			]
		},

		{
			title: 'Tables', icon: 'server', type: 'sub', active: false, children: [
				{
					title: 'Bootstrap Tables', type: 'sub', active: false, children: [
						{ path: '/table/basic', title: 'Basic Table', type: 'link' },
						{ path: '/table/sizing', title: 'Sizing Table', type: 'link' },
						{ path: '/table/border', title: 'Border Table', type: 'link' },
						{ path: '/table/styling', title: 'Styling Table', type: 'link' }
					]
				},
				{
					title: 'Ngx-Datatables', type: 'sub', active: false, children: [
						{ path: '/table/ngx-datatables/basic', title: 'Basic Table', type: 'link' },
						{ path: '/table/ngx-datatables/editing', title: 'Editing Table', type: 'link' },
						{ path: '/table/ngx-datatables/filter', title: 'Filter Table', type: 'link' },
						{ path: '/table/ngx-datatables/fullscreen', title: 'Fullscreen Table', type: 'link' },
						{ path: '/table/ngx-datatables/paging', title: 'Paging Table', type: 'link' },
						{ path: '/table/ngx-datatables/selection', title: 'Selection', type: 'link' },
						{ path: '/table/ngx-datatables/sort', title: 'Sorting Table', type: 'link', active: false },
					]
				}]
		},
		{
			title: 'Cards', icon: 'book', type: 'sub', active: false, children: [
				{ path: '/cards/basic', title: 'Basic Card', type: 'link' },
				{ path: '/cards/creative', title: 'Creative Card', type: 'link' },
				{ path: '/cards/tabbed', title: 'Tabbed Card', type: 'link' },
				{ path: '/cards/draggable', title: 'Draggable Card', type: 'link' }
			]
		},
		{
			title: 'Timeline', icon: 'sliders', type: 'sub', active: false, children: [
				{ path: '/timeline/timeline1', title: 'Timeline 1', type: 'link' },
				{ path: '/timeline/timeline2', title: 'Timeline 2', type: 'link' }
			]
		},
		{
			title: 'Charts', icon: 'bar-chart', type: 'sub', active: false, children: [
				{ path: '/chart/google', title: 'Google Chart', type: 'link' },
				{ path: '/chart/chartjs', title: 'Chartjs', type: 'link' },
				{ path: '/chart/chartist', title: 'Chartist', type: 'link' },
				{ path: '/chart/ngx-chart', title: 'Ngx-Chart', type: 'link' }
			]
		},
		{
			title: 'Map', icon: 'map', type: 'sub', active: false, children: [
				{ path: '/map/google', title: 'Google Map', type: 'link' },
				{ path: '/map/leaflet', title: 'Leaflet Map', type: 'link' }
			]
		},
		{
			path: '/editor', title: 'Editor', icon: 'git-pull-request', type: 'link'
		},
		{
			title: 'Users', icon: 'users', type: 'sub', active: false, children: [
				{ path: '/users/profile', title: 'Users Profile', type: 'link' },
				{ path: '/users/edit', title: 'Users Edit', type: 'link' },
				{ path: '/users/cards', title: 'Users Cards', type: 'link' }
			]
		},
		{
			path: '/calender', title: 'Calender', icon: 'calendar', type: 'link', bookmark: true
		},
		{
			title: 'Blog', icon: 'edit', type: 'sub', active: false, children: [
				{ path: '/blog/details', title: 'Blog Details', type: 'link' },
				{ path: '/blog/single', title: 'Blog Single', type: 'link' }
			]
		},
		{
			path: '/email', title: 'Email', icon: 'mail', type: 'link', bookmark: true
		},
		{
			path: '/contact/contacts', title: 'contact', icon: 'user-plus', type: 'link'
		},
		{
			path: '/chat', title: 'Chat', icon: 'message-square', type: 'link', bookmark: true
		},
		{
			path: '/social-app', title: 'Social App', icon: 'chrome', type: 'link'
		},
		{
			title: 'Job-Search', icon: 'user-check', type: 'sub', active: false, children: [
				{ path: '/job-search/cardview', title: 'Card View', type: 'link' },
				{ path: '/job-search/listview', title: 'List View', type: 'link' },
				{ path: '/job-search/job-desc/1', title: 'Job Detail', type: 'link' },
				{ path: '/job-search/job-apply/1', title: 'Apply', type: 'link' }
			]
		},
		{
			title: 'Learning', icon: 'layers', type: 'sub', active: false, children: [
				{ path: '/learning/learninglist', title: 'Learning List', type: 'link' },
				{ path: '/learning/learning-detail/1', title: 'Detail Course', type: 'link' },
			]
		},
		{
			path: '/faq', title: 'FAQ', icon: 'help-circle', type: 'link'
		},
		{
			path: '/knowledgebase', title: 'Knowledgebase', icon: 'database', type: 'link'
		},
		{
			path: '/support-ticket', title: 'Support Ticket', icon: 'headphones', type: 'link'
		},
		{
			path: '/to-do', title: 'To-Do', icon: 'mic', type: 'link'
		},
		{
			path: '/to-do-firebase', title: 'To-Do-Firebase', icon: 'mic', type: 'link'
		},
		{
			title: 'Ecommerce', icon: 'shopping-bag', type: 'sub', active: false, children: [
				{ path: '/ecommerce/products', title: 'Product', type: 'link' },
				{ path: '/ecommerce/product-details/1', title: 'Product page', type: 'link' },
				{ path: '/ecommerce/product/list', title: 'Product list', type: 'link' },
				{ path: '/ecommerce/payment/detail', title: 'Payment Details', type: 'link' },
				{ path: '/ecommerce/order', title: 'Order History', type: 'link' }
			]
		},
		{
			path: '/pricing', title: 'Pricing', icon: 'dollar-sign', type: 'link'
		},
		{
			path: '/sample-page', title: 'Sample page', icon: 'file', type: 'link'
		},
		{
			path: '/search-result', title: 'Search Pages', icon: 'search', type: 'link'
		},
		{
			title: 'Error Page', icon: 'alert-octagon', type: 'sub', active: false, children: [
				{ path: 'error/400', title: 'Error 400', type: 'extTabLink' },
				{ path: 'error/401', title: 'Error 401', type: 'extTabLink' },
				{ path: 'error/403', title: 'Error 403', type: 'extTabLink' },
				{ path: 'error/404', title: 'Error 404', type: 'extTabLink' },
				{ path: 'error/500', title: 'Error 500', type: 'extTabLink' },
				{ path: 'error/503', title: 'Error 503', type: 'extTabLink' }
			]
		},
		{
			title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
				{ path: 'authentication/login', title: 'Login Simple', type: 'extTabLink' },
				{ path: 'authentication/login/image', title: 'Login with Bg Image', type: 'extTabLink' },
				{ path: 'authentication/login/video', title: 'Login with Bg video', type: 'extTabLink' },
				{ path: 'authentication/register', title: 'Register Simple', type: 'extTabLink' },
				{ path: 'authentication/register/image', title: 'Register with Bg Image', type: 'extTabLink' },
				{ path: 'authentication/register/video', title: 'Register with Bg video', type: 'extTabLink' },
				{ path: 'authentication/unlockuser', title: 'Unlock User', type: 'extTabLink' },
				{ path: 'authentication/forgetpassword', title: 'Forget Password', type: 'extTabLink' },
				{ path: 'authentication/resetpassword', title: 'Reset Password', type: 'extTabLink' }
			]
		},
		{
			title: 'Coming Soon', icon: 'briefcase', type: 'sub', active: false, children: [
				{ path: 'comingsoon/page', title: 'Coming Simple', type: 'extTabLink' },
				{ path: 'comingsoon/page/image', title: 'Coming with Bg Image', type: 'extTabLink' },
				{ path: 'comingsoon/page/video', title: 'Coming with Bg video', type: 'extTabLink' }
			]
		},
		{
			path: '/maintenance', title: 'Maintenance', icon: 'settings', type: 'link'
		},
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
