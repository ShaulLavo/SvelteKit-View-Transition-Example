<script lang="ts">
	import articles from '$lib/articles.json';
	import { images } from '$lib/contacts';
</script>

<div class="container">
	{#each articles as { title, subtitle, slug }, i}
		<a href={'/' + slug} class="card">
			<h1 style:--title="title-{slug}">{title}</h1>
			<img style:--image="image-{slug}" src={images[i]} alt={title} />
			<p style:--subtitle="subtitle-{slug}">{subtitle}</p>
		</a>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 20px;
		width: 100%;
	}

	.card {
		text-decoration: none;
		color: inherit;
		border: 1px solid #e2e8f0;
		padding-inline: 20px;
		padding-block: 10px;
		border-radius: 10px;
		background-color: #f8f6f5;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: auto;
		max-width: 100%;

		& img {
			width: 100%;
			height: auto;
			border-radius: 5px;
			view-transition-name: var(--image);
		}

		& h1 {
			view-transition-name: var(--title);
			z-index: 10;
			position: relative;
		}

		& p {
			view-transition-name: var(--subtitle);
		}

		&:hover {
			box-shadow: #959da533 0px 8px 24px;
		}
	}
</style>
