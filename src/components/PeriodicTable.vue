<template>
  <div class="c-periodic-table">
    <element-general-properties v-show="Object.keys(selectedElement).length > 0" class="c-information" :element="selectedElement" :preview="true"></element-general-properties>

    <div v-for="element in elements"
         :data-element-group='element.elementGroup' :data-group='element.group' :data-period='element.period'
         class='element' :class="element.symbol && element.symbol.toLowerCase()"
         :style="{ opacity: filteredElements.includes(element.atomicNumber) ? 1 : 0.25 }">
      <router-link :to="'/element/' + element.atomicNumber" @mouseover.native="showElement(element)" @mouseout.native="hideElement()">
        <element-definition class="u-aspect-ratio" :element="element" :detailed="true"></element-definition>
      </router-link>
    </div>

    <div class="element lanthanoid" data-element-group="lanthanoid" :style="{ opacity: filteredElementsContainElementsOfGroup('lanthanoid') ? 1 : 0.25 }"></div>
    <div class="element actinoid" data-element-group="actinoid" :style="{ opacity: filteredElementsContainElementsOfGroup('actinoid') ? 1 : 0.25 }"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ElementBadge from './ElementBadge'
  import ElementDefinition from './ElementDefinition'
  import ElementGeneralProperties from './ElementProfile/ElementGeneralProperties'

  export default {
    name: 'periodic-table',
    components: {
      ElementGeneralProperties, ElementDefinition, ElementBadge
    },
    computed: {
      ...mapGetters({
        elements: 'localizedElements',
        filteredElements: 'filteredElements'
      }),
      selectedElement () {
        return this.elements[this.selectedElementId] || {}
      }
    },
    data () {
      return {
        symbol: 'Ti',
        name: 'Titanium',
        selectedElementId: '',
        showInfo: false
      }
    },
    methods: {
      showElement (element) {
        this.showInfo = true
        this.selectedElementId = element.atomicNumber
      },
      hideElement () {
        this.showInfo = false
      },
      filteredElementsContainElementsOfGroup (group) {
        let filteredElementsContainElementsOfGroup = false
        for (let id of this.filteredElements) {
          if (this.elements[id].elementGroup === group) {
            filteredElementsContainElementsOfGroup = true
          }
        }
        return filteredElementsContainElementsOfGroup
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/bootstrap/_variables";
  @import "../assets/scss/components/_variables";

  $element-height: 3.6vw;
  $elemont-font-size: 1vw;
  $grid-gutter: 0.25vw;

  .c-periodic-table {
    overflow: auto;
    margin: -$grid-gutter;
  }

  .c-information {
    margin: $grid-gutter;
    overflow: hidden;
    max-height: 13.75vw;
  }

  ol, li {
    margin: 0;
    padding: 0;
    float: none;
    list-style-type: none;
  }

  .element {
    background: $gray-lighter;
    margin: $grid-gutter;
  }

  @supports not(display: grid) {
    .element {
      float: left;
      min-width: 3.6vw;
      min-height: $element-height;
      margin: $grid-gutter;
    }

    .lanthanoid, .actinoid {
      display: none;
    }
  }

  [data-element-group] {
    border-style: solid;
    border-width: 1px;
    border-bottom-width: 0.25em;

    a {
      display: block;
      height: 100%;
      width: 100%;
      min-height: 4vw;
    }
  }

  .c-element-definition {
    color: white;
    font-size: $elemont-font-size;
  }

  [data-element-group="non-metal"] {
    background-color: rgba($non-metal, 0.25);
    border-color: $non-metal;

    a:hover {
      background-color: rgba($non-metal, 0.25);
    }
  }

  [data-element-group="halogen"] {
    background-color: rgba($halogen, 0.25);
    border-color: $halogen;

    a:hover {
      background-color: rgba($halogen, 0.25);
    }
  }

  [data-element-group="metalloid"] {
    background-color: rgba($metalloid, 0.25);
    border-color: $metalloid;

    a:hover {
      background-color: rgba($metalloid, 0.25);
    }
  }

  [data-element-group="metal"] {
    background-color: rgba($metal, 0.25);
    border-color: $metal;

    a:hover {
      background-color: rgba($metal, 0.25);
    }
  }

  [data-element-group="alkali-metal"] {
    background-color: rgba($alkali-metal, 0.25);
    border-color: $alkali-metal;

    a:hover {
      background-color: rgba($alkali-metal, 0.25);
    }
  }

  [data-element-group="alkaline-earth-metal"] {
    background-color: rgba($alkaline-earth-metal, 0.25);
    border-color: $alkaline-earth-metal;

    a:hover {
      background-color: rgba($alkaline-earth-metal, 0.25);
    }
  }

  [data-element-group="transition-metal"] {
    background-color: rgba($transition-metal, 0.25);
    border-color: $transition-metal;

    a:hover {
      background-color: rgba($transition-metal, 0.25);
    }
  }

  [data-element-group="noble-gas"] {
    background-color: rgba($noble-gas, 0.25);
    border-color: $noble-gas;

    a:hover {
      background-color: rgba($noble-gas, 0.25);
    }
  }

  [data-element-group="lanthanoid"] {
    background-color: rgba($lanthanoid, 0.25);
    border-color: $lanthanoid;

    a:hover {
      background-color: rgba($lanthanoid, 0.25);
    }
  }

  [data-element-group="actinoid"] {
    background-color: rgba($actinoid, 0.25);
    border-color: $actinoid;

    a:hover {
      background-color: rgba($actinoid, 0.25);
    }
  }

  @supports (display: grid) {
    .c-periodic-table {
      display: grid;
      /* grid-gap: $grid-gutter; */
      grid-template-columns: repeat(18, calc(100% / 18));
      grid-template-rows: repeat(9, 1fr);
    }

    .c-information {
      grid-column-start: 3;
      grid-column-end: span 10;
      grid-row-start: 1;
      grid-row-end: span 3;
    }

    .actinoid {
      grid-column: 3;
      grid-row: 7;
    }

    .lanthanoid {
      grid-column: 3;
      grid-row: 6;
    }

    .feature-element {
      grid-column: 3/9;
      grid-row: 2/4;
      background: #eee;
    }

    .h { grid-column: 1; grid-row: 1; }

    .he { grid-column: 18; grid-row: 1; }

    .li { grid-column: 1; grid-row: 2; }

    .be { grid-column: 2; grid-row: 2; }

    .b { grid-column: 13; grid-row: 2; }

    .c { grid-column: 14; grid-row: 2; }

    .n { grid-column: 15; grid-row: 2; }

    .o { grid-column: 16; grid-row: 2; }

    .f { grid-column: 17; grid-row: 2; }

    .ne { grid-column: 18; grid-row: 2; }

    .na { grid-column: 1; grid-row: 3; }

    .mg { grid-column: 2; grid-row: 3; }

    .al { grid-column: 13; grid-row: 3; }

    .si { grid-column: 14; grid-row: 3; }

    .p { grid-column: 15; grid-row: 3; }

    .s { grid-column: 16; grid-row: 3; }

    .cl { grid-column: 17; grid-row: 3; }

    .ar { grid-column: 18; grid-row: 3; }

    .k { grid-column: 1; grid-row: 4; }

    .ca { grid-column: 2; grid-row: 4; }

    .sc { grid-column: 3; grid-row: 4; }

    .ti { grid-column: 4; grid-row: 4; }

    .v { grid-column: 5; grid-row: 4; }

    .cr { grid-column: 6; grid-row: 4; }

    .mn { grid-column: 7; grid-row: 4; }

    .fe { grid-column: 8; grid-row: 4; }

    .co { grid-column: 9; grid-row: 4; }

    .ni { grid-column: 10; grid-row: 4; }

    .cu { grid-column: 11; grid-row: 4; }

    .zn { grid-column: 12; grid-row: 4; }

    .ga { grid-column: 13; grid-row: 4; }

    .ge { grid-column: 14; grid-row: 4; }

    .as { grid-column: 15; grid-row: 4; }

    .se { grid-column: 16; grid-row: 4; }

    .br { grid-column: 17; grid-row: 4; }

    .kr { grid-column: 18; grid-row: 4; }

    .rb { grid-column: 1; grid-row: 5; }

    .sr { grid-column: 2; grid-row: 5; }

    .y { grid-column: 3; grid-row: 5; }

    .zr { grid-column: 4; grid-row: 5; }

    .nb { grid-column: 5; grid-row: 5; }

    .mo { grid-column: 6; grid-row: 5; }

    .tc { grid-column: 7; grid-row: 5; }

    .ru { grid-column: 8; grid-row: 5; }

    .rh { grid-column: 9; grid-row: 5; }

    .pd { grid-column: 10; grid-row: 5; }

    .ag { grid-column: 11; grid-row: 5; }

    .cd { grid-column: 12; grid-row: 5; }

    .in { grid-column: 13; grid-row: 5; }

    .sn { grid-column: 14; grid-row: 5; }

    .sb { grid-column: 15; grid-row: 5; }

    .te { grid-column: 16; grid-row: 5; }

    .i { grid-column: 17; grid-row: 5; }

    .xe { grid-column: 18; grid-row: 5; }

    .cs { grid-column: 1; grid-row: 6; }

    .ba { grid-column: 2; grid-row: 6; }

    .la { grid-column: 2; grid-row: 6; }

    .ce { grid-column: 3; grid-row: 6; }

    .pr { grid-column: 4; grid-row: 6; }

    .nd { grid-column: 5; grid-row: 6; }

    .pm { grid-column: 6; grid-row: 6; }

    .sm { grid-column: 7; grid-row: 6; }

    .eu { grid-column: 8; grid-row: 6; }

    .gd { grid-column: 9; grid-row: 6; }

    .tb { grid-column: 10; grid-row: 6; }

    .dy { grid-column: 11; grid-row: 6; }

    .ho { grid-column: 12; grid-row: 6; }

    .er { grid-column: 13; grid-row: 6; }

    .tm { grid-column: 14; grid-row: 6; }

    .yb { grid-column: 15; grid-row: 6; }

    .lu { grid-column: 16; grid-row: 8; }

    .hf { grid-column: 4; grid-row: 6; }

    .ta { grid-column: 5; grid-row: 6; }

    .w { grid-column: 6; grid-row: 6; }

    .re { grid-column: 7; grid-row: 6; }

    .os { grid-column: 8; grid-row: 6; }

    .ir { grid-column: 9; grid-row: 6; }

    .pt { grid-column: 10; grid-row: 6; }

    .au { grid-column: 11; grid-row: 6; }

    .hg { grid-column: 12; grid-row: 6; }

    .tl { grid-column: 13; grid-row: 6; }

    .pb { grid-column: 14; grid-row: 6; }

    .bi { grid-column: 15; grid-row: 6; }

    .po { grid-column: 16; grid-row: 6; }

    .at { grid-column: 17; grid-row: 6; }

    .rn { grid-column: 18; grid-row: 6; }

    .fr { grid-column: 1; grid-row: 7; }

    .ra { grid-column: 2; grid-row: 7; }

    .ac { grid-column: 2; grid-row: 7; }

    .th { grid-column: 3; grid-row: 7; }

    .pa { grid-column: 4; grid-row: 7; }

    .u { grid-column: 5; grid-row: 7; }

    .np { grid-column: 6; grid-row: 7; }

    .pu { grid-column: 7; grid-row: 7; }

    .am { grid-column: 8; grid-row: 7; }

    .cm { grid-column: 9; grid-row: 7; }

    .bk { grid-column: 10; grid-row: 7; }

    .cf { grid-column: 11; grid-row: 7; }

    .es { grid-column: 12; grid-row: 7; }

    .fm { grid-column: 13; grid-row: 7; }

    .md { grid-column: 14; grid-row: 7; }

    .no { grid-column: 15; grid-row: 7; }

    .lr { grid-column: 16; grid-row: 9; }

    .rf { grid-column: 4; grid-row: 7; }

    .db { grid-column: 5; grid-row: 7; }

    .sg { grid-column: 6; grid-row: 7; }

    .bh { grid-column: 7; grid-row: 7; }

    .hs { grid-column: 8; grid-row: 7; }

    .mt { grid-column: 9; grid-row: 7; }

    .ds { grid-column: 10; grid-row: 7; }

    .rg { grid-column: 11; grid-row: 7; }

    .cn { grid-column: 12; grid-row: 7; }

    .uut { grid-column: 13; grid-row: 7; }

    .fl { grid-column: 14; grid-row: 7; }

    .uup { grid-column: 15; grid-row: 7; }

    .lv { grid-column: 16; grid-row: 7; }

    .uus { grid-column: 17; grid-row: 7; }

    .uuo { grid-column: 18; grid-row: 7; }

    .la { grid-column: 2; grid-row: 8; }

    .ce { grid-column: 3; grid-row: 8; }

    .pr { grid-column: 4; grid-row: 8; }

    .nd { grid-column: 5; grid-row: 8; }

    .pm { grid-column: 6; grid-row: 8; }

    .sm { grid-column: 7; grid-row: 8; }

    .eu { grid-column: 8; grid-row: 8; }

    .gd { grid-column: 9; grid-row: 8; }

    .tb { grid-column: 10; grid-row: 8; }

    .dy { grid-column: 11; grid-row: 8; }

    .ho { grid-column: 12; grid-row: 8; }

    .er { grid-column: 13; grid-row: 8; }

    .tm { grid-column: 14; grid-row: 8; }

    .yb { grid-column: 15; grid-row: 8; }

    .ac { grid-column: 2; grid-row: 9; }

    .th { grid-column: 3; grid-row: 9; }

    .pa { grid-column: 4; grid-row: 9; }

    .u { grid-column: 5; grid-row: 9; }

    .np { grid-column: 6; grid-row: 9; }

    .pu { grid-column: 7; grid-row: 9; }

    .am { grid-column: 8; grid-row: 9; }

    .cm { grid-column: 9; grid-row: 9; }

    .bk { grid-column: 10; grid-row: 9; }

    .cf { grid-column: 11; grid-row: 9; }

    .es { grid-column: 12; grid-row: 9; }

    .fm { grid-column: 13; grid-row: 9; }

    .md { grid-column: 14; grid-row: 9; }

    .no { grid-column: 15; grid-row: 9; }
  }
</style>
