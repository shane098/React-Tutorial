const App = {
    // ALL THE SELECTED HTML ELEMENTS
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },

    state: {
        currentPlayer: 1
    },
    // init is just a shorthand way to define a function property
    // on an object; in this example the object App
    init(){
      App.theFunctionalites()
    },
    theFunctionalites(){
          // this is for menu toggling
          App.$.menu.addEventListener("click", (event) => {
            App.$.menuItems.classList.toggle("hidden");
        });

        App.$.resetBtn.addEventListener("click", (event) =>{
            console.log('This will reset the game')
        });
        App.$.newRoundBtn.addEventListener("click", (event) =>{
            console.log('For reset button')
        });
        App.$.squares.forEach(square => {
            square.addEventListener("click", event => {
                console.log(`You clicked square ${event.target.id}`);

                const currentPlayer = App.state.currentPlayer
                const icon = document.createElement("i");
                if(currentPlayer === 1) {
                    icon.classList.add("fa-solid", "fa-x", "yellow");
                } else{
                    icon.classList.add("fa-solid", "fa-o", "turquoise");
                }

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1
                event.target.replaceChildren(icon);
            })
        });
    }
};
window.addEventListener("load", App.init);
