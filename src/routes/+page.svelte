<script lang="ts">
	import articles from '$lib/articles.json';
	import { images } from '$lib/contacts';
</script>

<h1>Cheeky Chronicles: A Cavalcade of Quirky Narratives</h1>
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
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
		background-color: #f2f4f6;
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
			box-shadow:
				0 1px 1px 0px #0000004d,
				0 2px 4px 0 #80808099,
				inset 0 1px 1px 0px #ffffff4d,
				inset 0 2px 4px 0 #c0c0c080;
		}
	}
</style>
