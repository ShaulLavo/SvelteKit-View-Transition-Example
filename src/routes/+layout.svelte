<script lang="ts">
	import '../app.css';

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		//@ts-ignore

		if (!document.startViewTransition) {
			alert(
				'Your browser does not support the advanced transition features used on this page. As a result, some animations will not be displayed. Please consider using a browser that supports these features for the best experience.'
			);
			return;
		}
		return new Promise((resolve) => {
			//@ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<slot />
