let filter_btns = document.querySelectorAll(".filter-btn");
let filter_items = document.querySelectorAll(".filter-item");

filter_btns.forEach((btn) => {
  btn.onclick = function () {
    // remove .active from all btns
    deactiveAll(filter_btns);
    // add .active to this btn
    this.classList.add("active");

    // display none for all filter_items
    displayNoneAll(filter_items);
    // display block for only this type
    displayBlock(this.dataset.target, filter_items);
  };
});

function deactiveAll(elements) {
  elements.forEach((el) => {
    el.classList.remove("active");
  });
}

function displayNoneAll(elements) {
  elements.forEach((el) => {
    el.style.display = "none";
  });
}

function displayBlock(target, elements) {
  elements.forEach((el) => {
    if (target == el.dataset.type || target == "all") {
      el.style.display = "block";
    }
  });
}


/*const dropitem= document.getElementById("drop-item")
new sortable(dropitem,{
    Animation:350,
    chosenClass:"sortable-chosen",
    dragClass:"sortable-drag",
    store:{

    }
})*/