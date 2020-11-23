<template>
	<nav :style="{ background: background || '#333' }">
		<ul :style="{ background: background || '#333' }" ref="nav">
			<figure class="image-logo">
				<h1>Popup food</h1>
			</figure>
			<li
				v-for="(link, index) in navLinks"
				:key="index"
				@mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
				@mouseleave="$event.currentTarget.style.background = background || '#333'"
				:class="link"
			>
				<router-link
					:to="link.path"
					:style="{ color: linkColor || '#DDD' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
	methods: {
	},
	data () {
		return {
		}
	}
}
</script>
<style scoped lang="scss">

nav {
	height: 60px;
	width: 100%;
	box-shadow: 2px 2px 2px #CCC;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);

	ul {
		display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 2px 2px 2px #CCC;
		justify-content: flex-end;

		figure {
			cursor: pointer;
			margin-right: 10px;
			position: absolute;
    		left: 0;
		}

		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}

		i {
			margin-right: 10px;
			font-size: 22px;
		}

		li {
			list-style-type: none;
		}
		li:focus {
			outline: none !important;
		}
		li a:focus {
			outline: none !important;
		}
		li a {
			padding: 7px 20px;
		}

		li {
			border-radius: 30px;
			border: 0px solid white;
			margin-left: 5px;
		}

		@media(max-width: 999px) {
			.router-link-exact-active {
				background-color: #999 !important;
				color: white !important;
				border-radius: 30px;
				border: 1px solid #999;
			}
		}

		@media(min-width: 1000px) {
			li:hover {
				color: white !important;
			}
			.router-link-exact-active {
				background-color: #999 !important;
				color: white !important;
				border-radius: 30px;
				border: 1px solid #999;
			}
		}
	}
}

@media screen and (max-width: 759px) {
	nav {
		ul {
			position: absolute;
			width: 300px;
			flex-direction: column;
			left: -240px;
			transition: 300ms ease all;
			top: 60px;
			justify-content: flex-start;

			&.active {
				left: 0px;
			}

			figure {
				position: fixed;
				z-index: 1;
				top: -5px;
				left: 2px;
			}

			li {
				width: 100%;
				padding-left: 0;
				padding-right: 0;
				margin-left: -1px;
			}

			a {
				flex-direction: row;
				justify-content: space-between;
				margin-right: 0px;
			}

			.router-link-exact-active {
				border: 0px solid;
				background-color: rgb(221, 221, 221) !important;
				color: black !important;
				border-radius: 0px;
			}
			li a{
				padding: 10px 0px;
			}
		}
	}
}
</style>
