<script lang="ts">
	export let data;
</script>

<div class="container" style:--card="card-{data.slug}">
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
		border-radius: 5px;
	}
	header {
		& h1 {
			font-size: 3rem;
			line-height: 3rem;
			/* view-transition-name: var(--title); */
		}
		& p {
			font-size: 1.3rem;
			line-height: 0.1rem;
			text-align: center;
			/* view-transition-name: var(--subtitle); */
		}
	}
	section {
		& p {
			text-align: center;
		}
	}

	.container {
		view-transition-name: var(--card);
		max-width: 80%;
		/* max-height: 80vh; */
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* background-color: #f2f4f6; */
		/* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
		padding-inline: 30px;
		padding-block: 40px;
		border-radius: 10px;
	}
</style>
