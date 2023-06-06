<script lang="ts">
	import { onMount } from 'svelte'
	import '../app.css'

	type Theme = 'dark' | 'light'

	let theme: Theme = 'light'

	onMount(() => {
		const savedTheme = localStorage.getItem('color-theme')
		if (savedTheme === 'dark' || savedTheme === 'light') {
			theme = savedTheme
		}
	})

	function setThemeCookie(newTheme: Theme) {
		theme = newTheme
		localStorage.setItem('color-theme', newTheme)
	}

	function switchTheme() {
		switch (theme) {
			case 'light': {
				setThemeCookie('dark')
				document.documentElement.classList.remove('light')
				document.documentElement.classList.add('dark')
				break
			}
			case 'dark': {
				setThemeCookie('light')
				document.documentElement.classList.remove('dark')
				document.documentElement.classList.add('light')
			}
		}
	}
</script>

<header class="w-full h-20 flex items-center justify-between px-[min(5%,5rem)]">
	<img src="/logo.svg" alt="Sveegy logo" class="w-10 h-10" />

	<nav>
		<button on:click={() => switchTheme()}>SWITCH</button>
	</nav>
</header>

<slot />
