<template>
	<v-app id="inspire" class="white">
		<common-toast />
		<v-main class="white">
			<v-container style="background-color: #f3f4f6" class="fill-height" fluid>
				<v-row align="center" justify="center">
					<nuxt />
				</v-row>
			</v-container>
		</v-main>
		<v-footer padless>
			<v-row no-gutters>
				<v-col class="d-flex justify-center">
					<span class="pr-2 pt-1 pb-2" @click="home" style="cursor: pointer"
						>@ 2021 Bestdoc Technology Private Limited.</span
					>
				</v-col>
			</v-row>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	methods: {
		home() {
			window.open('https://bestdocapp.com/', '_blank');
		}
	}
};
</script>

<style></style>
