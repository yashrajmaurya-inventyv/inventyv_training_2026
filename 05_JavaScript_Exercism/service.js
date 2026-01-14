

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text).then(function (result) {
      return result.translation;
    });
  }

  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(
      texts.map(text => this.free(text))
    );
  }

  request(text) {
    const api = this.api;
    let attempts = 0;

    return new Promise(function (resolve, reject) {
      function makeRequest() {
        attempts++;

        api.request(text, function (error) {
          if (!error) {
            resolve();
            return;
          }

          if (attempts === 3) {
            reject(error);
            return;
          }

          makeRequest();
        });
      }

      makeRequest();
    });
  }

  premium(text, minimumQuality) {
    const api = this.api;
    const service = this;

    return api.fetch(text).then(
      function (result) {
        if (result.quality < minimumQuality) {
          throw new QualityThresholdNotMet(text);
        }
        return result.translation;
      },
      function () {
        // ONLY when fetch fails
        return service.request(text).then(function () {
          return api.fetch(text).then(function (result) {
            if (result.quality < minimumQuality) {
              throw new QualityThresholdNotMet(text);
            }
            return result.translation;
          });
        });
      }
    );
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );
    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
