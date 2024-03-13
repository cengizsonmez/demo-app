## Link: [https://thriving-paprenjak-82e0f8.netlify.app/](https://thriving-paprenjak-82e0f8.netlify.app/)

The data is retrieved from the feed/sample.json file.

The pages are not divided into movie/series; they are managed through filter parameters on the gallery.

The item component is used to create the Card object.

Since the movie/series selection is not obtained from anywhere on the homepage, it is manually added. If data is received, the Card structure can be adapted accordingly.

Additionally, external components can be used for filtering and sorting operations; the prepareData function is suitable for this.

The prepareData function prepares the data retrieved from JSON for the item component. It takes two parameters, namely filters and sortOrder.
