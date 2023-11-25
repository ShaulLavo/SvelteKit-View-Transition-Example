<script lang="ts">
	import articles from '$lib/articles.json';
	import { images } from '$lib/contacts';
</script>

<h1>Cheeky Chronicles: A Cavalcade of Quirky Narratives</h1>
<div class="container">
	{#each articles as { title, subtitle, slug }, i}
		<a href={'/' + slug} class="card" style:--card="card-{slug}">
			<h1 style:--title="title-{slug}">{title}</h1>
			<img style:--image="image-{slug}" src={images[i]} alt={title} />
			<p style:--subtitle="subtitle-{slug}">{subtitle}</p>
		</a>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		grid-gap: 20px;
		width: 100%;
	}

	.card {
		text-decoration: none;
		color: inherit;
		padding-inline: 20px;
		padding-block: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: auto;
		max-width: 100%;
		border-radius: 10px;
		view-transition-name: var(--card);

		& img {
			width: 100%;
			height: auto;
			border-radius: 5px;
			view-transition-name: var(--image);
		}

		& h1 {
			/* view-transition-name: var(--title); */
			z-index: 10;
			position: relative;
		}

		& p {
			/* view-transition-name: var(--subtitle); */
		}

		&:hover {
			transition-property: transform;
			transition-duration: 0.32s;
			transform: scale(1.05);
		}
	}
</style>
