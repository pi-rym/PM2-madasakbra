(() => {
  var t = {
      989: (t) => {
        const e = document.getElementById("cardContainer");
        t.exports = (t) => {
          t.forEach((t, r) => {
            const n = document.createElement("div");
            n.classList.add("card-body"),
              (n.innerHTML = `\n<a href="./preview.html"> <img  class="card-img-top" src="${t.poster}" alt="${t.title}" "></a>\n       \n        \n      `),
              e.appendChild(n);
          });
        };
      },
    },
    e = {};
  function r(n) {
    var a = e[n];
    if (void 0 !== a) return a.exports;
    var o = (e[n] = { exports: {} });
    return t[n](o, o.exports, r), o.exports;
  }
  (() => {
    const t = r(989);
    $.get("https://students-api.up.railway.app/movies", function (e) {
      t(e);
    });
  })();
})();
