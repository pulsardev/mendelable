# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.0"></a>
# [1.1.0](https://github.com/pulsardev/mendelable/compare/v1.0.1...v1.1.0) (2017-10-12)


### Features

* **translation:** add turkish ([7138030](https://github.com/pulsardev/mendelable/commit/7138030))



# Mendelable

## v1.0.1 (2017-05-21)


## Bug Fixes
  - remove the empty `context` fields
  ([78c9bcff](https://github.com/pulsardev/mendelable/commit/78c9bcffa4da54f2014290b8c9877496a3803fab))
  - tracking
  ([3061db10](https://github.com/pulsardev/mendelable/commit/3061db10609dcaa9bb2ad936b9515f5f4842cbd5))

  - **translation**
    - translate the text of the donate button
  ([3448f737](https://github.com/pulsardev/mendelable/commit/3448f737a7f9e253c4d67cb776525f6426787486))
    - fetch the language from the navigator's property
  ([e752276c](https://github.com/pulsardev/mendelable/commit/e752276cee43544fdbdd2abe25cad212ad0ca59d))




## Features
  - add context for 17 elements
  ([6d41d7b8](https://github.com/pulsardev/mendelable/commit/6d41d7b8de82ddb3e6565a97fa902047748044ad))
  - add a donate button
  ([15611f36](https://github.com/pulsardev/mendelable/commit/15611f36a25336b60bd5b39529ad2b8799181cb6))
  - add tracking ga
  ([f9086b95](https://github.com/pulsardev/mendelable/commit/f9086b95cd8c34f837a40a9f7eee9b49b8944b6e))

  - **translation**
    - add the french description of the first 18 elements
  ([a53e001c](https://github.com/pulsardev/mendelable/commit/a53e001c8bdfe7caac56ee67bb4b5f3e17de4340))




## Chore
  - generate a new build
  ([318a74d9](https://github.com/pulsardev/mendelable/commit/318a74d949d6e298f49f9531a317df0f84e91cc8))





## v1.0.0 (2017-05-20)


## Breaking changes
  - due to [4b432ed9](https://github.com/pulsardev/mendelable/commits/4b432ed96a0c972432a1afb66fac4957c1ba2775),
  style: change the layout to make the navigation thinner

  ([4b432ed9](https://github.com/pulsardev/mendelable/commits/4b432ed96a0c972432a1afb66fac4957c1ba2775))
  - due to [9888822b](https://github.com/pulsardev/mendelable/commits/9888822b05641a5eece97aadc9f0a772f5e812d2),
  chore: use the atomic number as the key in the data file instead of the symbol

  ([9888822b](https://github.com/pulsardev/mendelable/commits/9888822b05641a5eece97aadc9f0a772f5e812d2))




## Bug Fixes
  - update the mail address
  ([349c16ce](https://github.com/pulsardev/mendelable/commits/349c16ce94834c7644c1443359801a5457ee13a8))
  - remove the remaining padding on the axes of the line chart
  ([0243efae](https://github.com/pulsardev/mendelable/commits/0243efaebd97207cef524c1497d6b4dc0ffeed17))
  - correctly redraw the masonry grid layout when switching between pages
  ([72cc33be](https://github.com/pulsardev/mendelable/commits/72cc33be750d522d7b17b6776a8d360e08b5d65f))
  - reset the game on route change
  ([80c1e419](https://github.com/pulsardev/mendelable/commits/80c1e4198d600155fc4db53c9284042243e5cbf6))
  - contact form layout and translations
  ([936b1aaf](https://github.com/pulsardev/mendelable/commits/936b1aaff637a2c392e06b24676f87c300c727d3))
  - add discovery date from feature/data
  ([94d330d8](https://github.com/pulsardev/mendelable/commits/94d330d88f5e1b6b932f263637ec6a07fb27898f))
  - take into account the empty cells in the filtering
  ([2e05b7a1](https://github.com/pulsardev/mendelable/commits/2e05b7a1add8beb84afe63eacd469a2cccd532f5))
  - correctly refresh the Highlight component
  ([cd3ad782](https://github.com/pulsardev/mendelable/commits/cd3ad78274941b008e75cc79bf8ee2e1e9e53e33))
  - watch the props in all charts components
  ([05e0827d](https://github.com/pulsardev/mendelable/commits/05e0827d34b940595d693ee5a6750f3e759fe528))
  - watch the props passed to DoughnutChart to correctly update the chart when the props change
  ([bbb9029f](https://github.com/pulsardev/mendelable/commits/bbb9029f3cb1cfda03e5815b3810f313e5b84d60))
  - make the charts responsive
  ([85694ec8](https://github.com/pulsardev/mendelable/commits/85694ec8d2c6f15de61131a3674b35625b447031))
  - fetch localized element data right away
  ([519221a4](https://github.com/pulsardev/mendelable/commits/519221a47201c2d003e885da9075a415138af706))
  - change the way we get and set the language
  ([8d224be6](https://github.com/pulsardev/mendelable/commits/8d224be6c0f73992171ed7cdd3f645d49d2a2dc3))
  - layout of ElementProfile and its child components
  ([8b039e6b](https://github.com/pulsardev/mendelable/commits/8b039e6b5209eb64092ada214f0b047424000c20))
  - error in the data
  ([0fd145a1](https://github.com/pulsardev/mendelable/commits/0fd145a1724128262b4a5ef3644baf43000f307d))
  - hide the card on the periodic table
  ([8e05c23d](https://github.com/pulsardev/mendelable/commits/8e05c23d375d0a5363876d8be19f2a3a9e97ea55))
  - use props to pass the symbol to the badge component
  ([e5f3eee6](https://github.com/pulsardev/mendelable/commits/e5f3eee6ff6548b2c62564174af14822a6b53976))
  - remove the named route warning and correctly merge the fetched objects
  ([bbcf9c6d](https://github.com/pulsardev/mendelable/commits/bbcf9c6d3d44a580e6523b047dae6aa5cb8ee3c7))
  - change some colors and correct some data
  ([121594c2](https://github.com/pulsardev/mendelable/commits/121594c219b1f83b7df951bf43f594f958644758))




## Features
  - add french name for each chimical element
  ([8cb6aba5](https://github.com/pulsardev/mendelable/commits/8cb6aba5d6d4067cda50b6b947edeace7bb185b3))
  - add a simple view mode and fix the `atomic mass` property sometimes being called simply `weight`
  ([f51e55f7](https://github.com/pulsardev/mendelable/commits/f51e55f767313297c8b99bcd2a8df45fbf3918c7))
  - the Material Components Switch is now a Vue component
  ([24c54c95](https://github.com/pulsardev/mendelable/commits/24c54c95b07eea43f04bb19cf0fe7212fc60f532))
  - add a switch to show/hide the JSON preview
  ([58936938](https://github.com/pulsardev/mendelable/commits/589369383f82a268b2bfc5cf0b59b5e36222af0d))
  - remove the JSON preview, remove the line chart's legend and adjust the dimensions of the cells on the periodic table
  ([67a3bbcc](https://github.com/pulsardev/mendelable/commits/67a3bbccf819d2e6fa7ea4dccea27771dc90e20c))
  - add the game mode
  ([98f6ba02](https://github.com/pulsardev/mendelable/commits/98f6ba02c042be8c0c787aacbd5f7b82ec8285e5))
  - add style for the element point on line chart
  ([bb87e590](https://github.com/pulsardev/mendelable/commits/bb87e59053bc0b8b92abc98c89f02b88356408ba))
  - add form
  ([df380717](https://github.com/pulsardev/mendelable/commits/df380717675ea315520179c9f03f5f3b317b2bb5))
  - add the possibility to filter by group
  ([c8c529b1](https://github.com/pulsardev/mendelable/commits/c8c529b1834eac70615602ba7d9e314d757866a5))
  - add an About route and component
  ([b2fa5fef](https://github.com/pulsardev/mendelable/commits/b2fa5fef06d19c2958231a87638f3cd3c042cfc9))
  - add buttons to go to the next or the previous element
  ([2f461fa4](https://github.com/pulsardev/mendelable/commits/2f461fa4fd0933ce7bd451d96f0270dba52f1050))
  - style the physical properties bar chart
  ([c86307fe](https://github.com/pulsardev/mendelable/commits/c86307fea6008724578acd72b871baf464d4ec08))
  - add electrons par shell property
  ([5f585bcf](https://github.com/pulsardev/mendelable/commits/5f585bcf1c16594c8dc677f0ecb26af696534c9e))
  - add atomic mass as property
  ([62eff46a](https://github.com/pulsardev/mendelable/commits/62eff46a29d2c0d013f59d6930016cf83c6b7897))
  - add ionization energy as property in data's json
  ([afe9c792](https://github.com/pulsardev/mendelable/commits/afe9c792c6dd7d3651f2dc3c5b92ecb21b8e848e))
  - adapt the DoughnutChart to display the electrons per shell
  ([579034d6](https://github.com/pulsardev/mendelable/commits/579034d6e326c5b64fc8e1ae86a1c7a6a9532f96))
  - translate the groups
  ([bc9b306f](https://github.com/pulsardev/mendelable/commits/bc9b306fb790359d761c579b292b38b471898cd2))
  - add hightlight.js
  ([fa2f213f](https://github.com/pulsardev/mendelable/commits/fa2f213f99a967bcfb9f77b27cd9bdf1d5de950c))
  - use Masonry to make the ElementProfile layout
  ([b5763387](https://github.com/pulsardev/mendelable/commits/b5763387522a5e7716a0231333d49a98f99d5ad6))
  - use element-general-properties as preview on the periodic table and add utilities CSS classes for elements' groups colors
  ([1645729a](https://github.com/pulsardev/mendelable/commits/1645729ab3c04ca4f7fa2f620c333e2819a95943))
  - add a detailed mode on the elements' badges
  ([0f6f9fb0](https://github.com/pulsardev/mendelable/commits/0f6f9fb07f6688c3d4e743bd9f5209dfbc016195))
  - add a FeaturedValue component
  ([086a7a76](https://github.com/pulsardev/mendelable/commits/086a7a7636d5cabc3fa06d4094630bd0a474d47d))
  - add the language state to vuex and create a getter to retrieve localized elements
  ([b83d9064](https://github.com/pulsardev/mendelable/commits/b83d90645e38e4167defdff5d7f5aa7062f077ea))
  - fetch elements from the vuex store (no more remote calls for the moment)
  ([aae89ee7](https://github.com/pulsardev/mendelable/commits/aae89ee7a5a6f480ee41c57e1d73cfd1c223111c))
  - add vuex
  ([32948909](https://github.com/pulsardev/mendelable/commits/32948909ee5db19352dad2da70e921977ee24c34))
  - add Charts.js
  ([20168017](https://github.com/pulsardev/mendelable/commits/20168017dc7338189a75e5fc0ef9c815e567c42e))
  - add an event emitter to trigger a fetch when the language changes
  ([6b7e09f2](https://github.com/pulsardev/mendelable/commits/6b7e09f27138925483ef3d4496dd2fe9d7ebaf49))
  - add a LanguageSwitcher component
  ([d9305e23](https://github.com/pulsardev/mendelable/commits/d9305e238277f7d35696464c1eb8adad281472da))
  - add new route /element/:symbol
  ([6ff9b85f](https://github.com/pulsardev/mendelable/commits/6ff9b85f5cb411f53f94ec017f544a126b1be10d))
  - add vue-i18n
  ([942f5d9a](https://github.com/pulsardev/mendelable/commits/942f5d9a965e9fb9a8308d2e9ed2008eca23a0f9))
  - add ElementCard and ElementBadge components
  ([9a4a8c59](https://github.com/pulsardev/mendelable/commits/9a4a8c592b7c7f03f9ed1a950c64a9e042593417))

  - **translation**
    - add missing translations
  ([fe5e35da](https://github.com/pulsardev/mendelable/commits/fe5e35dafe6cdde688b6788ed01b621b4b98e95f))




## Refactor
  - use variables to define the elements' group color
  ([706a3e9d](https://github.com/pulsardev/mendelable/commits/706a3e9d87e2525e9441823810fec225003175c5))




## Style
  - improve the responsivity of the layout
  ([aa751612](https://github.com/pulsardev/mendelable/commits/aa75161203882714b37ebc61b55addebd095a6d7))
  - customize the line chart
  ([b63174e7](https://github.com/pulsardev/mendelable/commits/b63174e7f163780249c305d7cf310415c3d3e0b3))
  - improve the layout of the historical properties block
  ([6390cfad](https://github.com/pulsardev/mendelable/commits/6390cfadb69aa954e950c7db1db72cc8d25674d4))
  - improve the layout of the periodic table on browsers that do not support grid-layout well
  ([8dead41e](https://github.com/pulsardev/mendelable/commits/8dead41eda6172ebd59b6c1e25d9c16406716b9a))
  - change the background color of inputs
  ([3cc65fc3](https://github.com/pulsardev/mendelable/commits/3cc65fc36991038282144a23f637127ccf676a77))
  - improve the menu and add a 1px border to the periodic table's cells
  ([32feca47](https://github.com/pulsardev/mendelable/commits/32feca47bb061401e643e1fc9d315f85c08152fa))
  - make the periodic table a bit more responsive
  ([6f089428](https://github.com/pulsardev/mendelable/commits/6f089428e4fb2c5e301a77d4d8e212e1462e09a5))
  - handle the overflow of the periodic table on small screens
  ([a3ec9e68](https://github.com/pulsardev/mendelable/commits/a3ec9e68d4a903b6b23fc73cbc9938cb79ae2d3b))
  - add font-awesome and set the main layout up
  ([8eaa3f79](https://github.com/pulsardev/mendelable/commits/8eaa3f79e867d87aa8c9170be98fc39906c85c1f))
  - add Bootstrap
  ([7cbd4a9d](https://github.com/pulsardev/mendelable/commits/7cbd4a9d88713fe9b2f45b6bdf1dd1dd9870fa95))




## Chore
  - update README
  ([9327ba45](https://github.com/pulsardev/mendelable/commits/9327ba450a0b6eca76252c776f161b831c05b013))
  - add a screeshot and a licence
  ([a3ca3ac3](https://github.com/pulsardev/mendelable/commits/a3ca3ac358eb02f5c770c20bfe1b50e0314f9fb7))
  - cleanup and some fixes
  ([450cc4ec](https://github.com/pulsardev/mendelable/commits/450cc4ec6e0d2e4b2ac1d02933fa4af31319f50b))
  - remove typo and console.log
  ([8749f54d](https://github.com/pulsardev/mendelable/commits/8749f54d9aa9fb18406d0b2729e162cf28cb4266))
  - change some texts
  ([77303f16](https://github.com/pulsardev/mendelable/commits/77303f16f0bc90f78e243d9bd40d8f4940ea0ee3))
  - some cleanup and formatting
  ([5f305001](https://github.com/pulsardev/mendelable/commits/5f305001d9f018b0090c35c6bb6997d370810357))
  - rename Chart into BarChart
  ([06e3e299](https://github.com/pulsardev/mendelable/commits/06e3e299f50c30a2034c72dbbbf3b00e35072dd2))
  - move the translations in separate files
  ([a18f8517](https://github.com/pulsardev/mendelable/commits/a18f8517b4be9d26284642c520c7a3a218934e8a))
  - initial commit
  ([50469e53](https://github.com/pulsardev/mendelable/commits/50469e53001f251c6a45dc2bb3718371a4d6d55b))





---
<sub><sup>*Generated with [git-changelog](https://github.com/rafinskipg/git-changelog). If you have any problems or suggestions, create an issue.* :) **Thanks** </sub></sup>
