<script lang="ts">
	export let data;
</script>

<div class="container">
	<img style:--image="image-{data.slug}" src={data.image} alt={data.title} />
	<header>
		<h1 style:--title="title-{data.slug}">{data.title}</h1>
		<p style:--subtitle="subtitle-{data.slug}">{data.subtitle}</p>
	</header>
	<section>
		{#each data.content as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>
</div>

<style>
	img {
		height: 50vh;
		view-transition-name: var(--image);
	}
	header {
		& h1 {
			font-size: 3rem;
			line-height: 3rem;
			view-transition-name: var(--title);
		}
		& p {
			font-size: 1.3rem;
			line-height: 0.1rem;
			text-align: center;
			view-transition-name: var(--subtitle);
		}
	}
	section {
		& p {
			text-align: center;
		}
	}

	.container {
		max-width: 80%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
