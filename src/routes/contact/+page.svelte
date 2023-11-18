<!-- Importing List component to render a list of items on the page -->
<script>
  import List from '../../components/List.svelte';

  // Data for the list component
  let items = ['Sales Inquiries', 'Customer Support', 'General Feedback'];
</script>

<!-- Using the List component to render a list -->
<List {items} />
