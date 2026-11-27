document.addEventListener('DOMContentLoaded', function () {
  var grid = document.querySelector('[data-filter-grid]');
  if (!grid) return;

  var items = Array.prototype.slice.call(grid.querySelectorAll('[data-item]'));
  var selects = Array.prototype.slice.call(document.querySelectorAll('select[data-kind]'));
  var allLabel = grid.getAttribute('data-all') || 'All';
  var noResults = grid.getAttribute('data-no-results') || '';
  var count = document.querySelector('[data-count]');
  var empty = grid.querySelector('.empty');

  // Fill selects that have no options yet, using values found on the items
  selects.forEach(function (sel) {
    if (sel.options.length > 0) return;
    var kind = sel.getAttribute('data-kind');
    var values = [];
    items.forEach(function (it) {
      var v = it.getAttribute('data-' + kind);
      if (v && values.indexOf(v) === -1) values.push(v);
    });
    values.sort();
    if (kind === 'ym') values.reverse(); // newest first
    sel.add(new Option(allLabel, ''));
    values.forEach(function (v) { sel.add(new Option(v, v)); });
  });

  function apply() {
    var shown = 0;
    items.forEach(function (it) {
      var ok = selects.every(function (sel) {
        var kind = sel.getAttribute('data-kind');
        return !sel.value || it.getAttribute('data-' + kind) === sel.value;
      });
      it.hidden = !ok;
      if (ok) shown++;
    });
    if (count) count.textContent = shown + ' / ' + items.length;
    if (empty) { empty.hidden = shown !== 0; empty.textContent = noResults; }
  }

  selects.forEach(function (s) { s.addEventListener('change', apply); });
  apply();
});
