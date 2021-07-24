import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Tooltip from "./modules/tooltip.js";
import Modal from "./modules/modal.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scroll = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const toolTip = new Tooltip("[data-tooltip]");
toolTip.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();
