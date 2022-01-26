/* ACCORDION */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.children[2];
    if (panel.style.display === "flex") {
        panel.style.display = "none";
        this.children[1].style.transform = 'rotate(0)';
    } else {
        panel.style.display = "flex";
        if (this.children[1].id === '180deg') {
            this.children[1].style.transform = 'rotate(-180deg)';
        } else {
            this.children[1].style.transform = 'rotate(90deg)';
        }
    }
})};