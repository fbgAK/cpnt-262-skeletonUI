# CPNT 262 SkeletonUI Layouts


## Author
Akash Samra


## Link to Deployed site
[Link to netlify](link-to-netlify-goes-here)


## Search research notes/code journal
I could have done better overall but it was a frustrating challenge which I learnt and gained knowledge from. It was frustrating trying to deploy this onto local host or netlify, I got it working on local host but then the external pages were not working here was my trail and error.
I kept getting the error: 'No routes found. If you are using a custom src/routes directory, make sure it is specified in svelte.config.js'
in tne terminal when running dev. This was persistent for some time while working on this assignment. Im sure it was a routing path issue, below ive linked websites I used to try to figure out what was wrong.

## Attributes
1. https://kit.svelte.dev/docs/routing
2. https://stackoverflow.com/questions71481056/sveltekit-how-to-refer-to-the-routes-folder-from-components-and-endpoints-via
3. https://github.com/sveltejs/kit/issues/4528
4. https://egghead.io/blog/learn-sveltekit-part-2-routing-in-sveltekit
5. https://www.skeleton.dev/docs/tokens
6. https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a

# Search Topic One
## Understanding SkeletonUI Layout Components in SvelteKit

1. [SvelteKit SkeletonUI integration](https://sveltekitskeletonuiexample.com)
    - **Useful Keywords:** "SvelteKit SkeletonUI integration", "SvelteKit layout components", "SkeletonUI documentation"
    - **Unuseful Keywords:** "React SkeletonUI", "Vue SkeletonUI"
    - **Attributes:** [SvelteKit Documentation](https://kit.svelte.dev/docs/routing), [SkeletonUI Tokens](https://www.skeleton.dev/docs/tokens)

2. [SkeletonUI color system documentation](https://skeletonuidesigncolors.com)
    - **Useful Keywords:** "SkeletonUI color system documentation", "SvelteKit layout components", "SkeletonUI design tokens"
    - **Method(s) used to improve search:** Adding "SvelteKit" to search terms.
    - **Attributes:** [SkeletonUI Design Tokens](https://www.skeleton.dev/docs/tokens), [Understanding SvelteKit Routing](https://kit.svelte.dev/docs/routing)

# Search Topic Two
## Multipage Organization in SvelteKit

1. [SvelteKit multipage layout examples](https://sveltekitmultipageexamples.com)
    - **Useful Keywords:** "SvelteKit multipage organization", "SvelteKit layout best practices", "SvelteKit page routing"
    - **Unuseful Keywords:** "React multipage", "Vue multipage"
    - **Attributes:** [SvelteKit Documentation](https://kit.svelte.dev/docs/routing), [GitHub Issue on SvelteKit Routing](https://github.com/sveltejs/kit/issues/4528)

2. [SkeletonUI design tokens usage](https://skeletonuidesigntokens.com)
    - **Useful Keywords:** "SkeletonUI design tokens usage", "SvelteKit SkeletonUI integration", "SkeletonUI color system"
    - **Method(s) used to improve search:** Refining search with "SvelteKit" and "SkeletonUI".
    - **Attributes:** [SkeletonUI Tokens](https://www.skeleton.dev/docs/tokens), [Understanding SvelteKit Routing](https://kit.svelte.dev/docs/routing)

# Additional References
- [Learn SvelteKit Part 2: Routing in SvelteKit](https://egghead.io/blog/learn-sveltekit-part-2-routing-in-sveltekit)
- [What You Should Know About Skeleton Screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)

## Task/Steps

## Standardize Page Components

- [ ] Create a `PageHeader` component.
- [ ] Set up basic styles and layout of content.
- [ ] Create props for consistent titles.
- [ ] Implement and test the `PageHeader` component.
- [ ] Optimize the component.
- [ ] Test and ensure flexibility.
- [ ] Optimize styling.

## Consistent Layout

- [ ] Standardize page headers.
- [ ] Ensure consistent layout markup.
- [ ] Implement and test.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
