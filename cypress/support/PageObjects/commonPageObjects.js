/// <reference types='cypress' />

const leftSideBar = {
    sideMenu: "[data-cy*='side-menu']",
    payRoll: '[data-cy="sidebar-menu-Payroll"]',
    contracts: '[data-cy="sidebar-menu-Contracts"]',   
}

const commonPageObjects = {
    leftSideBar
}

export default commonPageObjects;