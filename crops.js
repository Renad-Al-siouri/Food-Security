const filterBtns = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".maincontainer");
const searchInput = document.getElementById("searchInput");


filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


searchInput.addEventListener("keyup", () => {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
