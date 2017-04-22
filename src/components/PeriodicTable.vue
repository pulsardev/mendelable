<template>
  <div class="periodic-table mt-5">
    <div class="row">
      <div class="col">

        <ol class="periodic-table wrapper">
          <li data-element-group='nonmetal' data-group='1' data-period='1' class='element h'>
            <router-link to="/element/H"><h2>Hydrogen</h2><i>H</i></router-link>
          </li>
          <li data-element-group='noble-gas' data-group='18' data-period='1' class='element he'>
            <router-link to="/element/He"><h2>Helium</h2><i>He</i></router-link>
          </li>
          <li data-element-group='alkali-metal' data-group='1' data-period='2' class='element li'><h2>Lithium</h2><i>Li</i></li>
          <li data-element-group='alkaline-earth-metal' data-group='2' data-period='2' class='element be'><h2>Beryllium</h2><i>Be</i></li>
          <li data-element-group='metalloid' data-group='13' data-period='2' class='element b'><h2>Boron</h2><i>B</i></li>
          <li data-element-group='nonmetal' data-group='14' data-period='2' class='element c'><h2>Carbon</h2><i>C</i></li>
          <li data-element-group='nonmetal' data-group='15' data-period='2' class='element n'><h2>Nitrogen</h2><i>N</i></li>
          <li data-element-group='nonmetal' data-group='16' data-period='2' class='element o'><h2>Oxygen</h2><i>O</i></li>
          <li data-element-group='halogen' data-group='17' data-period='2' class='element f'><h2>Fluorine</h2><i>F</i></li>
          <li data-element-group='noble-gas' data-group='18' data-period='2' class='element ne'><h2>Neon</h2><i>Ne</i></li>
          <li data-element-group='alkali-metal' data-group='1' data-period='3' class='element na'><h2>Sodium</h2><i>Na</i></li>
          <li data-element-group='alkaline-earth-metal' data-group='2' data-period='3' class='element mg'><h2>Magnesium</h2><i>Mg</i></li>
          <li data-element-group='metal' data-group='13' data-period='3' class='element al'><h2>Aluminum</h2><i>Al</i></li>
          <li data-element-group='metalloid' data-group='14' data-period='3' class='element si'><h2>Silicon</h2><i>Si</i></li>
          <li data-element-group='nonmetal' data-group='15' data-period='3' class='element p'><h2>Phosphorus</h2><i>P</i></li>
          <li data-element-group='nonmetal' data-group='16' data-period='3' class='element s'><h2>Sulfur</h2><i>S</i></li>
          <li data-element-group='halogen' data-group='17' data-period='3' class='element cl'><h2>Chlorine</h2><i>Cl</i></li>
          <li data-element-group='noble-gas' data-group='18' data-period='3' class='element ar'><h2>Argon</h2><i>Ar</i></li>
          <li data-element-group='alkali-metal' data-group='1' data-period='4' class='element k'><h2>Potassium</h2><i>K</i></li>
          <li data-element-group='alkaline-earth-metal' data-group='2' data-period='4' class='element ca'><h2>Calcium</h2><i>Ca</i></li>
          <li data-element-group='transition-metal' data-group='3' data-period='4' class='element sc'><h2>Scandium</h2><i>Sc</i></li>
          <li data-element-group='transition-metal' data-group='4' data-period='4' class='element ti'><h2>Titanium</h2><i>Ti</i></li>
          <li data-element-group='transition-metal' data-group='5' data-period='4' class='element v'><h2>Vanadium</h2><i>V</i></li>
          <li data-element-group='transition-metal' data-group='6' data-period='4' class='element cr'><h2>Chromium</h2><i>Cr</i></li>
          <li data-element-group='transition-metal' data-group='7' data-period='4' class='element mn'><h2>Manganese</h2><i>Mn</i></li>
          <li data-element-group='transition-metal' data-group='8' data-period='4' class='element fe'><h2>Iron</h2><i>Fe</i></li>
          <li data-element-group='transition-metal' data-group='9' data-period='4' class='element co'><h2>Cobalt</h2><i>Co</i></li>
          <li data-element-group='transition-metal' data-group='10' data-period='4' class='element ni'><h2>Nickel</h2><i>Ni</i></li>
          <li data-element-group='transition-metal' data-group='11' data-period='4' class='element cu'><h2>Copper</h2><i>Cu</i></li>
          <li data-element-group='transition-metal' data-group='12' data-period='4' class='element zn'><h2>Zinc</h2><i>Zn</i></li>
          <li data-element-group='metal' data-group='13' data-period='4' class='element ga'><h2>Gallium</h2><i>Ga</i></li>
          <li data-element-group='metalloid' data-group='14' data-period='4' class='element ge'><h2>Germanium</h2><i>Ge</i></li>
          <li data-element-group='metalloid' data-group='15' data-period='4' class='element as'><h2>Arsenic</h2><i>As</i></li>
          <li data-element-group='nonmetal' data-group='16' data-period='4' class='element se'><h2>Selenium</h2><i>Se</i></li>
          <li data-element-group='halogen' data-group='17' data-period='4' class='element br'><h2>Bromine</h2><i>Br</i></li>
          <li data-element-group='noble-gas' data-group='18' data-period='4' class='element kr'><h2>Krypton</h2><i>Kr</i></li>
          <li data-element-group='alkali-metal' data-group='1' data-period='5' class='element rb'><h2>Rubidium</h2><i>Rb</i></li>
          <li data-element-group='alkaline-earth-metal' data-group='2' data-period='5' class='element sr'><h2>Strontium</h2><i>Sr</i></li>
          <li data-element-group='transition-metal' data-group='3' data-period='5' class='element y'><h2>Yttrium</h2><i>Y</i></li>
          <li data-element-group='transition-metal' data-group='4' data-period='5' class='element zr'><h2>Zirconium</h2><i>Zr</i></li>
          <li data-element-group='transition-metal' data-group='5' data-period='5' class='element nb'><h2>Niobium</h2><i>Nb</i></li>
          <li data-element-group='transition-metal' data-group='6' data-period='5' class='element mo'><h2>Molybdenum</h2><i>Mo</i></li>
          <li data-element-group='transition-metal' data-group='7' data-period='5' class='element tc'><h2>Technetium</h2><i>Tc</i></li>
          <li data-element-group='transition-metal' data-group='8' data-period='5' class='element ru'><h2>Ruthenium</h2><i>Ru</i></li>
          <li data-element-group='transition-metal' data-group='9' data-period='5' class='element rh'><h2>Rhodium</h2><i>Rh</i></li>
          <li data-element-group='transition-metal' data-group='10' data-period='5' class='element pd'><h2>Palladium</h2><i>Pd</i></li>
          <li data-element-group='transition-metal' data-group='11' data-period='5' class='element ag'><h2>Silver</h2><i>Ag</i></li>
          <li data-element-group='transition-metal' data-group='12' data-period='5' class='element cd'><h2>Cadmium</h2><i>Cd</i></li>
          <li data-element-group='metal' data-group='13' data-period='5' class='element in'><h2>Indium</h2><i>In</i></li>
          <li data-element-group='metal' data-group='14' data-period='5' class='element sn'><h2>Tin</h2><i>Sn</i></li>
          <li data-element-group='metalloid' data-group='15' data-period='5' class='element sb'><h2>Antimony</h2><i>Sb</i></li>
          <li data-element-group='metalloid' data-group='16' data-period='5' class='element te'><h2>Tellurium</h2><i>Te</i></li>
          <li data-element-group='halogen' data-group='17' data-period='5' class='element i'><h2>Iodine</h2><i>I</i></li>
          <li data-element-group='noble-gas' data-group='18' data-period='5' class='element xe'><h2>Xenon</h2><i>Xe</i></li>
          <li data-element-group='alkali-metal' data-group='1' data-period='6' class='element cs'><h2>Cesium</h2><i>Cs</i></li>
          <li data-element-group='alkaline-earth-metal' data-group='2' data-period='6' class='element ba'><h2>Barium</h2><i>Ba</i></li>
          <li data-element-group='lanthanoid' data-group='2' data-period='6' class='element la'><h2>Lanthanum</h2><i>La</i></li>
          <li data-element-group='lanthanoid' data-group='3' data-period='6' class='element ce'><h2>Cerium</h2><i>Ce</i></li>
          <li data-element-group='lanthanoid' data-group='4' data-period='6' class='element pr'><h2>Praseodymium</h2><i>Pr</i></li>
          <li data-element-group='lanthanoid' data-group='5' data-period='6' class='element nd'><h2>Neodymium</h2><i>Nd</i></li>
          <li data-element-group='lanthanoid' data-group='6' data-period='6' class='element pm'><h2>Promethium</h2><i>Pm</i></li>
          <li data-element-group='lanthanoid' data-group='7' data-period='6' class='element sm'><h2>Samarium</h2><i>Sm</i></li>
          <li data-element-group='lanthanoid' data-group='8' data-period='6' class='element eu'><h2>Europium</h2><i>Eu</i></li>
          <li data-element-group='lanthanoid' data-group='9' data-period='6' class='element gd'><h2>Gadolinium</h2><i>Gd</i></li>
          <li data-element-group='lanthanoid' data-group='10' data-period='6' class='element tb'><h2>Terbium</h2><i>Tb</i></li>
          <li data-element-group='lanthanoid' data-group='11' data-period='6' class='element dy'><h2>Dysprosium</h2><i>Dy</i></li>
          <li data-element-group='lanthanoid' data-group='12' data-period='6' class='element ho'><h2>Holmium</h2><i>Ho</i></li>
          <li data-element-group='lanthanoid' data-group='13' data-period='6' class='element er'><h2>Erbium</h2><i>Er</i></li>
          <li data-element-group='lanthanoid' data-group='14' data-period='6' class='element tm'><h2>Thulium</h2><i>Tm</i></li>
          <li data-element-group='lanthanoid' data-group='15' data-period='6' class='element yb'><h2>Ytterbium</h2><i>Yb</i></li>
          <li data-element-group='lanthanoid' data-group='16' data-period='6' class='element lu'><h2>Lutetium</h2><i>Lu</i></li>
          <li data-element-group='transition-metal' data-group='4' data-period='6' class='element hf'><h2>Hafnium</h2><i>Hf</i></li>
          <li data-element-group='transition-metal' data-group='5' data-period='6' class='element ta'><h2>Tantalum</h2><i>Ta</i></li>
          <li data-element-group='transition-metal' data-group='6' data-period='6' class='element w'><h2>Tungsten</h2><i>W</i></li>
          <li data-element-group='transition-metal' data-group='7' data-period='6' class='element re'><h2>Rhenium</h2><i>Re</i></li>
          <li data-element-group='transition-metal' data-group='8' data-period='6' class='element os'><h2>Osmium</h2><i>Os</i></li>
          <li data-element-group='transition-metal' data-group='9' data-period='6' class='element ir'><h2>Iridium</h2><i>Ir</i></li>
          <li data-element-group='transition-metal' data-group='10' data-period='6' class='element pt'><h2>Platinum</h2><i>Pt</i></li>
          <li data-element-group='transition-metal' data-group='11' data-period='6' class='element au'><h2>Gold</h2><i>Au</i></li>
          <li data-element-group='transition-metal' data-group='12' data-period='6' class='element hg'><h2>Mercury</h2><i>Hg</i></li>
          <li data-element-group='metal' data-group='13' data-period='6' class='element tl'><h2>Thallium</h2><i>Tl</i></li>
          <li data-element-group='metal' data-group='14' data-period='6' class='element pb'><h2>Lead</h2><i>Pb</i></li>
          <li data-element-group='metal' data-group='15' data-period='6' class='element bi'><h2>Bismuth</h2><i>Bi</i></li>
          <li data-element-group='metalloid' data-group='16' data-period='6' class='element po'><h2>Polonium</h2><i>Po</i></li>
          <li data-element-group='halogen' data-group='17' data-period='6' class='element at'><h2>Astatine</h2><i>At</i></li>
          <li data-element-group='noble-gas' data-group='18' data-period='6' class='element rn'><h2>Radon</h2><i>Rn</i></li>
          <li data-element-group='alkali-metal' data-group='1' data-period='7' class='element fr'><h2>Francium</h2><i>Fr</i></li>
          <li data-element-group='alkaline-earth-metal' data-group='2' data-period='7' class='element ra'><h2>Radium</h2><i>Ra</i></li>
          <li data-element-group='actinoid' data-group='2' data-period='7' class='element ac'><h2>Actinium</h2><i>Ac</i></li>
          <li data-element-group='actinoid' data-group='3' data-period='7' class='element th'><h2>Thorium</h2><i>Th</i></li>
          <li data-element-group='actinoid' data-group='4' data-period='7' class='element pa'><h2>Protactinium</h2><i>Pa</i></li>
          <li data-element-group='actinoid' data-group='5' data-period='7' class='element u'><h2>Uranium</h2><i>U</i></li>
          <li data-element-group='actinoid' data-group='6' data-period='7' class='element np'><h2>Neptunium</h2><i>Np</i></li>
          <li data-element-group='actinoid' data-group='7' data-period='7' class='element pu'><h2>Plutonium</h2><i>Pu</i></li>
          <li data-element-group='actinoid' data-group='8' data-period='7' class='element am'><h2>Americium</h2><i>Am</i></li>
          <li data-element-group='actinoid' data-group='9' data-period='7' class='element cm'><h2>Curium</h2><i>Cm</i></li>
          <li data-element-group='actinoid' data-group='10' data-period='7' class='element bk'><h2>Berkelium</h2><i>Bk</i></li>
          <li data-element-group='actinoid' data-group='11' data-period='7' class='element cf'><h2>Californium</h2><i>Cf</i></li>
          <li data-element-group='actinoid' data-group='12' data-period='7' class='element es'><h2>Einsteinium</h2><i>Es</i></li>
          <li data-element-group='actinoid' data-group='13' data-period='7' class='element fm'><h2>Fermium</h2><i>Fm</i></li>
          <li data-element-group='actinoid' data-group='14' data-period='7' class='element md'><h2>Mendelevium</h2><i>Md</i></li>
          <li data-element-group='actinoid' data-group='15' data-period='7' class='element no'><h2>Nobelium</h2><i>No</i></li>
          <li data-element-group='actinoid' data-group='16' data-period='7' class='element lr'><h2>Lawrencium</h2><i>Lr</i></li>
          <li data-element-group='transition-metal' data-group='4' data-period='7' class='element rf'><h2>Rutherfordium</h2><i>Rf</i></li>
          <li data-element-group='transition-metal' data-group='5' data-period='7' class='element db'><h2>Dubnium</h2><i>Db</i></li>
          <li data-element-group='transition-metal' data-group='6' data-period='7' class='element sg'><h2>Seaborgium</h2><i>Sg</i></li>
          <li data-element-group='transition-metal' data-group='7' data-period='7' class='element bh'><h2>Bohrium</h2><i>Bh</i></li>
          <li data-element-group='transition-metal' data-group='8' data-period='7' class='element hs'><h2>Hassium</h2><i>Hs</i></li>
          <li data-element-group='transition-metal' data-group='9' data-period='7' class='element mt'><h2>Meitnerium</h2><i>Mt</i></li>
          <li data-element-group='transition-metal' data-group='10' data-period='7' class='element ds'><h2>Darmstadtium</h2><i>Ds</i></li>
          <li data-element-group='transition-metal' data-group='11' data-period='7' class='element rg'><h2>Roentgenium</h2><i>Rg</i></li>
          <li data-element-group='transition-metal' data-group='12' data-period='7' class='element cn'><h2>Copernicium</h2><i>Cn</i></li>
          <li data-element-group='metal' data-group='13' data-period='7' class='element uut'><h2>Ununtrium</h2><i>Uut</i></li>
          <li data-element-group='metal' data-group='14' data-period='7' class='element fl'><h2>Flerovium</h2><i>Fl</i></li>
          <li data-element-group='metal' data-group='15' data-period='7' class='element uup'><h2>Ununpentium</h2><i>Uup</i></li>
          <li data-element-group='metal' data-group='16' data-period='7' class='element lv'><h2>Livermorium</h2><i>Lv</i></li>
          <li data-element-group='halogen' data-group='17' data-period='7' class='element uus'><h2>Ununseptium</h2><i>Uus</i></li>
          <li data-element-group='noble-gas' data-group='18' data-period='7' class='element uuo'><h2>Ununoctium </h2><i>Uuo</i></li>
          <li class="element lanthanoid" data-element-group="lanthanoid"></li>
          <li class="element actinoid" data-element-group="actinoid"></li>
        </ol>

      </div>
    </div>
  </div>
</template>

<script>
  import ElementBadge from './ElementBadge'

  export default {
    name: 'periodic-table',
    components: {
      ElementBadge
    },
    data () {
      return {
        symbol: 'Ti',
        name: 'Titanium'
      }
    }
  }
</script>

<style lang="scss" scoped>
  $gray: #192229;
  $gray-lighter: #35404d;

  $element-height: 3vw;
  $elemont-font-size: 1vw;
  $grid-gutter: 0.25vw;

  .periodic-table.wrapper {
    overflow: auto;
  }

  .a-element-badge__container {
    margin-top: 0;
  }

  h2 {
    display: none;
  }

  i {
    line-height: $element-height;
    text-align: center;
    color: rgba(white, 0.75);
    font-size: $elemont-font-size;
    font-style: normal;
  }

  ol, li {
    margin: 0;
    padding: 0;
    float: none;
    list-style-type: none;
  }

  .element {
    background: $gray-lighter;
    text-align: center;
  }

  @supports (not(display: grid)) and (not(display:flex)) {
    .element {
      float: left;
      min-width: 75px;
      min-height: $element-height;
      margin: 3px;
    }
  }

  @supports (not(display: grid)) and (display:flex) {
    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    .element {
      flex-grow: 1;
      flex-basis: 75px;
      min-height: $element-height;
      margin: 3px;
    }

    .lanthanoid, .actinoid {
      visibility: hidden;
    }
  }

  [data-element-group] {
    a {
      display: block;
    }
  }

  [data-element-group="nonmetal"] {
    background-color: rgba(#03a9f4, 0.25);
    border-bottom: $grid-gutter solid #03a9f4;

    a:hover {
      background-color: rgba(#03a9f4, 0.25);
    }
  }

  [data-element-group="halogen"] {
    background-color: rgba(#f06292, 0.25);
    border-bottom: $grid-gutter solid #f06292;
  }

  [data-element-group="metalloid"] {
    background-color: rgba(#673ab7, 0.25);
    border-bottom: $grid-gutter solid #673ab7;
  }

  [data-element-group="metal"] {
    background-color: rgba(#19caa7, 0.25);
    border-bottom: $grid-gutter solid #19caa7;
  }

  [data-element-group="alkali-metal"] {
    background-color: rgba(#f44336, 0.25);
    border-bottom: $grid-gutter solid #f44336;
  }

  [data-element-group="alkaline-earth-metal"] {
    background-color: rgba(#ff9800, 0.25);
    border-bottom: $grid-gutter solid #ff9800;
  }

  [data-element-group="transition-metal"] {
    background-color: rgba(#efbb31, 0.25);
    border-bottom: $grid-gutter solid #efbb31;
  }

  [data-element-group="noble-gas"] {
    background-color: rgba(#00bcd4, 0.25);
    border-bottom: $grid-gutter solid #00bcd4;
  }

  [data-element-group="lanthanoid"] {
    background-color: rgba(#8bc34a, 0.25);
    border-bottom: $grid-gutter solid #8bc34a;
  }

  [data-element-group="actinoid"] {
    background-color: rgba(#cddc39, 0.25);
    border-bottom: $grid-gutter solid #cddc39;
  }

  @supports (display: grid) {
    .wrapper {
      display: grid;
      grid-gap: $grid-gutter;
      grid-template-columns: repeat(18, 1fr);
      grid-template-rows: repeat(9, 1fr);
      max-width: 100%;
      margin: 1em auto;
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
