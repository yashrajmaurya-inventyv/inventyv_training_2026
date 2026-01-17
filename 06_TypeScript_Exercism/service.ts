export class TranslationService {
  api: any;
  constructor(api: any) {
    this.api = api;
  }

  free(text: string): Promise<string> {
    return this.api.fetch(text).then(function (result: any) {
      return result.translation;
    });
  }

  batch(texts: string[]): Promise<string[]> {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(texts.map((text) => this.free(text)));
  }

  request(text: string): Promise<void> {
    const api = this.api;
    let attempts = 0;

    return new Promise(function (resolve, reject) {
      function makeRequest() {
        attempts++;

        api.request(text, function (error: any) {
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

  premium(text: string, minimumQuality: number): Promise<string> {
    const api = this.api;
    const service = this;

    return api.fetch(text).then(
      function (result: any) {
        if (result.quality < minimumQuality) {
          throw new QualityThresholdNotMet(text);
        }
        return result.translation;
      },
      function () {
        return service.request(text).then(function () {
          return api.fetch(text).then(function (result: any) {
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
  text: string;
  constructor(text: string) {
    super(`\nThe translation of ${text} does not meet the requested quality threshold.\n`.trim());
    this.text = text;
    this.name = 'QualityThresholdNotMet';
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(`\nRequested a batch translation, but there are no texts in the batch.\n`.trim());
    this.name = 'BatchIsEmpty';
  }
}