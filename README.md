# Training Center

The HSF Training Center is a catalog of training material for the High Energy
Physics (HEP) community, maintained by the
[HSF Training group](https://hepsoftwarefoundation.org/activities/training.html)
together with [IRIS-HEP](https://iris-hep.org/). It is deployed at
[hsf-training.org/training-center](https://hsf-training.org/training-center/).

It brings together training modules from HSF, the Software Carpentries, and other
organizations, and offers two views:

- **Curriculum**: a curated selection of modules, grouped by topic, that gets
  newcomers to HEP up to speed with the software skills they need.
- **All Tutorials**: the complete catalog, which can be searched and filtered by
  level, status, programming language, and availability of videos.

The Training Center replaces the legacy
[static curriculum table](https://hepsoftwarefoundation.org/training/curriculum.html)
on the HSF website, which now redirects here.

## Run it

The website is built with [Astro](https://astro.build/).

```bash
# once
npm install
# start a development server at http://localhost:4321/training-center/
npm run dev
# build the static website into dist/
npm run build
```

## Adding training material

All tutorials are listed in [`data/data.yaml`](data/data.yaml), and the curriculum
shown on the front page is defined in [`data/curricula.yaml`](data/curricula.yaml).
Images referenced by the `image` field go in [`src/images/`](src/images/).

Both files are validated when building the website (see
[`src/content.config.ts`](src/content.config.ts)), so typos in field names, invalid
values, missing images, or curriculum entries that don't match a tutorial `id` will
make the build fail with an error pointing to the problem.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/en/reference/emoji-key/)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ariostas"><img src="https://avatars.githubusercontent.com/u/7596837?v=4?s=100" width="100px;" alt="Andres Rios Tascon"/><br /><sub><b>Andres Rios Tascon</b></sub></a><br /><a href="https://github.com/hsf-training/training-center/commits?author=ariostas" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Aniumbott"><img src="https://avatars.githubusercontent.com/u/76243585?v=4?s=100" width="100px;" alt="Aniket Rana"/><br /><sub><b>Aniket Rana</b></sub></a><br /><a href="https://github.com/hsf-training/training-center/commits?author=Aniumbott" title="Code">💻</a> <a href="#design-Aniumbott" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.lieret.net/"><img src="https://avatars.githubusercontent.com/u/13602468?v=4?s=100" width="100px;" alt="Kilian Lieret"/><br /><sub><b>Kilian Lieret</b></sub></a><br /><a href="https://github.com/hsf-training/training-center/commits?author=klieret" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/richa2710"><img src="https://avatars.githubusercontent.com/u/62288297?v=4?s=100" width="100px;" alt="Richa Sharma"/><br /><sub><b>Richa Sharma</b></sub></a><br /><a href="https://github.com/hsf-training/training-center/commits?author=richa2710" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
