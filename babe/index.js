document.addEventListener('DOMContentLoaded', function() {

    const firstButton = document.getElementById( 'first-button' );
    const firstDiv = document.getElementById( 'first' );
    const mainDiv = document.getElementById( 'main' );

    firstButton.addEventListener( 'click', () => {
        firstDiv.style.display = 'none';
        mainDiv.style.display = 'block';
        document.body.style.backgroundColor = '101010';
    }) 

});

const tablinks = document.getElementsByClassName( "tab-links" );
const tabcontents = document.getElementsByClassName( "tab-contents" );

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}