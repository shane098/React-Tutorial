const App = {
    // ALL THE SELECTED HTML ELEMENTS
    $: {
        menu: document.querySelector(".menu"),
        menuItems: document.querySelector(".items"),
    },
};

App.$.menu.addEventListener("click", (event) => {
    App.$.menuItems.classList.toggle("hidden");
});