const CDN = s => `https://cdnjs.cloudflare.com/ajax/libs/${s}`;
const ramda = CDN('ramda/0.21.0/ramda.min');
const jquery = CDN('jquery/3.0.0-rc1/jquery.min');

requirejs.config({ paths: { ramda, jquery } });
require(['jquery', 'ramda'], ($, { compose, curry, map, prop, path }) => {
  // -- Utils ----------------------------------------------------------
  const Impure = {
    trace: curry((tag, x) => { console.log(tag, x); return x; }), // eslint-disable-line no-console
    getJSON: curry((callback, url) => $.getJSON(url, callback)),
    setHtml: curry((sel, html) => $(sel).html(html)),
  };

  // -- Pure -----------------------------------------------------------
  const query = t => `?tags=${t}&format=json&jsoncallback=?`;
  const url = t => `https://api.flickr.com/services/feeds/photos_public.gne${query(t)}`;
  const img = src => $('<img />', { src })
  const getImagesOnJSON = compose(
    map(img),
    map(path(['media', 'm'])),
    prop('items')
  )

  const render = compose(
    Impure.setHtml('#js-main'),
    getImagesOnJSON
  )

  const app = compose(
    Impure.getJSON(render),
    url
  )

  app('cats')
});
