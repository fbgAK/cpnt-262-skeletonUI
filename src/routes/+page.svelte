<!-- Importing List component from a relative path with an alias and using it to render a list -->
<script>

  import List from '$components/List.svelte';

  // Data for the list component
  let items = ['Sales Inquiries', 'Customer Support', 'General Feedback'];
</script>

<!-- Rendering List Component -->
<List {items} />
