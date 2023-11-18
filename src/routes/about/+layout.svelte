<!-- Secondary layout component for the about page -->
<script>
  export let title;  // Data prop for dynamic title rendering
</script>

<style>

  /* Applying skeletonUI styles */
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--skeleton-background);
  }

  header, footer {
    background-color: var(--skeleton-background);
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid var(--skeleton-background);
  }

  nav {
    margin-bottom: 20px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav li {
    display: inline-block;
    margin-right: 15px;
  }

  nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  main {
    padding: 20px 0;
  }
</style>

<div class="container">
  <header>
    <h1>{title}</h1>
  </header>

  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <slot></slot>  <!-- Slot: rendering route content -->
  </main>

  <footer>
    <p>&copy; 2023 Your Company</p>
  </footer>
</div>
