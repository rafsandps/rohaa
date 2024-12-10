onload = () => {
  const timeout = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(timeout);
  }, 1000);
};
