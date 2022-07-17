# Nx, Expo, Next.js with Solito monorepo

<div align="center">
<img src="https://user-images.githubusercontent.com/9199433/179087650-a7a6ce7d-9022-49db-b09c-6fdf9be89b6c.gif" alt="GIF showing the site and app" />
</div>

## 🔦 About

This monorepo is a copy of the "blank" monorepo found in the [Solito repository](https://github.com/nandorojo/solito).
The only difference is that this monorepo is using Nx and the folder structure is slightly different because of that.

## 📦 Included packages

- `solito` for cross-platform navigation
- Expo SDK 45
- Next.js 12
- React Navigation 6

## 🗂 Folder layout

- `apps` entry points for each app

  - `site`
  - `app`

- `libs`
  - `feature` (home and user)
  - `shared/provider` (all the providers that wrap the app, and some no-ops for web)
  - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

## 🏁 Start the app

- Install dependencies
- Next.js: `nx serve site`
- Expo: `nx serve app`

## 🧐 Why use Expo + Next.js?

See Fernando Rojo's ([@FernandoTheRojo](https://twitter.com/fernandotherojo)) talk about this topic at Next.js Conf 2021:

<a href="https://www.youtube.com/watch?v=0lnbdRweJtA"><img width="1332" alt="image" src="https://user-images.githubusercontent.com/13172299/157299915-b633e083-f271-48c6-a262-7b7eef765be5.png">
</a>
