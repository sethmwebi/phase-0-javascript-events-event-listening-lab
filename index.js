const addingEventListener = () => {
  const input = document.getElementById("button");
  input.addEventListener("mouseenter", () => {
    alert("Mouse was passed over this element");
  });
};
