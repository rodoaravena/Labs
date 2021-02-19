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
			title: 'Starter Kit', icon: 'anchor', type: 'sub', badgeType: 'primary', active: true, children:
				[
					{
						title: 'Color Version', type: 'sub', active: true, children: [
							{ path: '/color-version/light', title: 'Layout Light', type: 'link' },
							{ path: '/color-version/dark', title: 'Layout Dark', type: 'link' }
						]
					},
					{
						title: 'Sidebar', type: 'sub', active: false, children: [
							{ path: '/sidebar/light-sidebar', title: 'Light Sidebar', type: 'link' },
							{ path: '/sidebar/compact-sidebar', title: 'Compact Sidebar', type: 'link', bookmark: true },
							{ path: '/sidebar/icon-sidebar', title: 'Compact Icon Sidebar', type: 'link' },
							{ path: '/sidebar/dark-sidebar', title: 'Dark Sidebar', type: 'link' },
							{ path: '/sidebar/hidden-sidebar', title: 'Sidebar Hidden', type: 'link', bookmark: true },
							{ path: '/sidebar/fixed-sidebar', title: 'Sidebar Fixed', type: 'link' },
							{ path: '/sidebar/image-sidebar', title: 'Sidebar With Image', type: 'link' },
							{ path: '/sidebar/disable', title: 'Disable', type: 'link', bookmark: true },
						]
					},
					{
						title: 'Page Layout', type: 'sub', active: false, children: [
							{ path: '/page-layout/boxed', title: 'Boxed', type: 'link', bookmark: true },
							{ path: '/page-layout/rtl', title: 'RTL', type: 'link', bookmark: true },
							{ path: '/page-layout/column', title: '1 Column', type: 'link' },
						]
					},
					{
						title: 'Menu Options', type: 'sub', active: false, children: [
							{ path: '/menu-option/scroll', title: 'Hide menu on Scroll', type: 'link' },
							{ path: '/menu-option/vertical', title: 'Vertical Menu', type: 'link' },
							{ path: '/menu-option/mega', title: 'Mega Menu', type: 'link', bookmark: true },
							{ path: '/menu-option/fix-header', title: 'Fix Header', type: 'link' },
							{ path: '/menu-option/header', title: 'Fix Header & Sidebar', type: 'link' },
						]
					},
					{
						title: 'Footers', type: 'sub', active: false, children: [
							{ path: '/footer/light-footer', title: 'Footer Light', type: 'link', bookmark: true },
							{ path: '/footer/dark-footer', title: 'Footer Dark', type: 'link' },
							{ path: '/footer/fixed-footer', title: 'Footer Fixed', type: 'link' },
						]
					}
				]
		},
		{
			path: '/raise-support', title: 'Raise Support', icon: 'headphones', type: 'link'
		},
		{
			path: '/documentation', title: 'Documentation', icon: 'file-text', type: 'link'
		}
	]
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
