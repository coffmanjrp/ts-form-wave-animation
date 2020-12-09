const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = (label as HTMLElement).innerText
    .split('')
    .map(
      (letter: string, index: number) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});
