# Akka Overview

The Akka stack is a setup for running Wordpress as a headless CMS with a NextJS frontend application.

Akka comes with a dockerized development environment (controlled with [Akka Tools](https://github.com/Aventyret/akka-tools)), but can be hosted anywhere that you can run Node and PHP (with or without containerization).

## Getting started

There is a boilerplate called [Akka Bas](https://github.com/Aventyret/akka-bas) that can be used as a starting point for developing a new Akka solution. After copying the Akka bas code base to a new repository, this is what you do:

Rename `akka-bas` and `akka_bas` to a suitable slug for your new project in the following files:
- `.env.template`
- `compose.yaml`
- `.github/workflows/cms-build-theme.yaml`
- `cms/auth.json`
- `www/next.config.js`

In akka-tools – which you should have in the same directory as your new project – add your new localhost domain to `proxy/domains.dat`. Run `make down && make up` in akka-tools.

Add your new localhost domains to your computers hosts file (e.g. `/etc/hosts`).

Create a new release tag (v1.0.0) in your new repository and upload a seed.sql.gz file to the tag. You can take the file from the [akka-bas release tag](https://github.com/Aventyret/akka-bas/releases/tag/v1.0.0).

Run `make setup` in the root of the new project.

Run `make dev`

Go to `cms.your-new-domain.test/wp/wp-admin`

## Migrate from v1

- The REST Api base is changed from /headless/v1 to /akka/v2
- Plugin hooks are now prefixed with `akka_` as apposed to `ahw_` in v1.
- Plugin classes are renamed and namespaced in `Akka`. All class functins are now `snake_cased`. See api reference.
- [ACF Unique ID Field](https://github.com/philipnewcomer/ACF-Unique-ID-Field) is now shipped with the plugin



```js
export default {
  code: () => {}
}
```

::: details
This is a details block.
:::

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
