(() => {
  var t = {
      989: (t) => {
        const e = document.getElementById("cardContainer");
        t.exports = (t) => {
          t.forEach((t, n) => {
            const r = document.createElement("div");
            r.classList.add("card-body"),
              (r.innerHTML = `\n<a href="./preview.html"> <img  class="card-img-top" src="${t.poster}" alt="${t.title}" "></a>\n       \n        \n      `),
              e.appendChild(r);
          });
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var s = (e[r] = { exports: {} });
    return t[r](s, s.exports, n), s.exports;
  }
  (() => {
    const t = n(989);
    $.get("https://students-api.2.us-1.fl0.io/movies", function (e) {
      t(e);
    });
  })();
})();
