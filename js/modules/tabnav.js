export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
  }

  // ativa a tab de acordo com o index do tabMenu
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add("ativo", direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativa o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
