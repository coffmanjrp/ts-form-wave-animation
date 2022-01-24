const labels = document.querySelectorAll('.form-control label');

labels.forEach((item) => {
  const label = item;

  label.innerHTML = (label as HTMLLabelElement).innerText
    .split('')
    .map(
      (letter: string, index: number) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});
