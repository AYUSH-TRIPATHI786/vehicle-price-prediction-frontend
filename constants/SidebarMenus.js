export const ADMIN = [
	{
		to: '/users',
		title: 'User Management',
		icon: 'person',
		qa: 'side-menu-metrics-dashboard'
	},
	{
		icon: 'description',
		title: 'Master Data Management',
		to: '/master-data',
		qa: 'side-menu-master-data'
	},
	{
		icon: 'analytics',
		title: 'Reports',
		to: '/reports',
		qa: 'side-menu-reports'
	},
	{
		icon: 'phone',
		title: 'Communication Management',
		to: '/communication',
		qa: 'side-menu-communication-management'
	},
	{
		icon: 'account_tree',
		title: 'Workflow Management',
		to: '/workflow',
		qa: 'side-menu-workflow-management'
	}
];
export const USER = [
	{
		to: '/mob',
		title: 'Home',
		icon: 'home',
		qa: 'bottom-navigator-home'
	},
	{
		to: '/mob/messages',
		title: 'Messages',
		icon: 'email',
		qa: 'bottom-navigator-messages'
	},
	{
		to: '/mob/reports',
		title: 'Reports',
		icon: 'analytics',
		qa: 'bottom-navigator-reports'
	},
	{
		to: '/mob/apps',
		title: 'BD Apps',
		icon: 'apps',
		qa: 'bottom-navigator-apps'
	},
	{
		to: '/mob/profile',
		title: 'Profile',
		icon: 'person',
		qa: 'bottom-navigator-Profile'
	}
];

export default {
	ADMIN,
	USER
};
