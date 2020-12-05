<template>
	<div class="wrapper">
		<side-bar :background-color="$root.settings.darkMode.status ? 'black' : 'white'" v-if="$root.settings.sideMenu.status">
			<template slot="links">
				<sidebar-link
					to="/dashboard"
					name="Dashboard"
					icon="ti-panel"
				/>
				
				<sidebar-link
					to="/users"
					name="Users"
					icon="ti-user"
					v-if="$root.settings.userProfile.status"
				/>
				
				
				<sidebar-link
					to="/gallery"
					name="Gallery"
					icon="ti-image"
					v-if="$root.settings.gallery.status"
				/>
				<sidebar-link
					to="/weather"
					name="Weather"
					icon="ti-shine"
					v-if="$root.settings.weather.status"
				/>
				<sidebar-link
					to="/video"
					name="Video"
					icon="ti-control-play"
					v-if="$root.settings.video.status"
				/>
				
				<sidebar-link
					to="/notifications"
					name="Notifications"
					icon="ti-bell"
				/>
			</template>
			<mobile-menu>
				
				<drop-down
					class="nav-item"
					title="5 Notifications"
					title-classes="nav-link"
					icon="ti-bell"
				>
					<a class="dropdown-item">Notification 1</a>
					<a class="dropdown-item">Notification 2</a>
					<a class="dropdown-item">Notification 3</a>
					<a class="dropdown-item">Notification 4</a>
					<a class="dropdown-item">Another notification</a>
				</drop-down>
				<li class="nav-item">
					<a class="nav-link">
						<i class="ti-settings"></i>
						<p>Settings</p>
					</a>
				</li>
				<li class="divider"></li>
			</mobile-menu>
		</side-bar>
		<div class="main-panel d-flex flex-column">
			<top-navbar></top-navbar>

			<dashboard-content
				@click.native="toggleSidebar"
				class="d-flex flex-grow-1"
				
			>
			</dashboard-content>

			
		</div>
	</div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
	components: {
		TopNavbar,
		DashboardContent,
		MobileMenu,
	},
	methods: {
		toggleSidebar() {
			if (this.$sidebar.showSidebar) {
				this.$sidebar.displaySidebar(false);
			}
		},
	},
};
</script>
