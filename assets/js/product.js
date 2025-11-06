document.querySelectorAll('.wn-tab').forEach(button => {
  button.addEventListener('click', () => {

    const target = button.getAttribute('data-tab');

    document.querySelectorAll('.wn-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.wn-panel').forEach(panel => panel.classList.remove('active-panel'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active-panel');
  });
});