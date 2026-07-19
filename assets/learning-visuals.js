(function () {
  document.querySelectorAll('[data-box-model]').forEach(function (demo) {
    var paddingInput = demo.querySelector('[data-padding-control]');
    var marginInput = demo.querySelector('[data-margin-control]');
    var paddingOutput = demo.querySelector('[data-padding-output]');
    var marginOutput = demo.querySelector('[data-margin-output]');

    function update() {
      var padding = paddingInput.value + 'px';
      var margin = marginInput.value + 'px';
      demo.style.setProperty('--demo-padding', padding);
      demo.style.setProperty('--demo-margin', margin);
      paddingOutput.textContent = padding;
      marginOutput.textContent = margin;
    }

    [paddingInput, marginInput].forEach(function (input) {
      input.addEventListener('input', update);
      input.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.stopPropagation();
        }
      });
    });

    update();
  });
})();
