<!-- Cards Component -->
<!-- Custom component to render a list of items using SkeletonUI styles -->
<script>
  export let items;  // Data prop for list
</script>

<style>
  /* Applying skeletonUI Styles for List Items */
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 12px;
    padding: 8px;
    border: 1px solid var(--skeleton-border-color);
    background-color: var(--skeleton-list-background);
    border-radius: 4px;
  }
</style>

<ul>
  {#each items as item (item)}
    <li>{item}</li>
  {/each}
</ul>
