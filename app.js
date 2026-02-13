
  let buttons = document.querySelectorAll(".buy");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Book added to cart 📚");
    });
  });

