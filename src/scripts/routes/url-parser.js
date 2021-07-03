const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = url.includes('?') ? this._querySplitter(url) : this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return url.includes('?') ? this._querySplitter(url) : this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
    };
  },

  _querySplitter(url) {
    const urlQuery = url.split('?');
    const query = urlQuery[1].split('=');
    return {
      resource: urlQuery[0].slice(1) || null,
      query: query[1] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
    + (splitedUrl.id ? '/:id' : '');
  },
};

export default UrlParser;
