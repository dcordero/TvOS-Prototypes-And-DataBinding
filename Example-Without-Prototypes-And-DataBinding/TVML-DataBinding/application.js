App.onLaunch = function(options) {
    const gridDocument = createGrid();
    navigationDocument.pushDocument(gridDocument);
}

var createGrid = function() {
    const header =
           `<?xml version="1.0" encoding="UTF-8" ?>
            <document>
              <stackTemplate>
                <collectionList>
                  <grid>
                    <header>
                      <title>Grid</title>
                    </header>
                    <section/>
                  </grid>
                </collectionList>
              </stackTemplate>
              </document>`


    var parser = new DOMParser();
    var doc = parser.parseFromString(header, "application/xml");

    populate(doc)
    return doc
}

var populate = function(gridDocument) {

    // Build lockups
    let catCodes = ["100", "200", "300", "400", "500"];
    let numberOfCells = 45000;

    let lockups = "";
    for(let i = 0; i < numberOfCells; ++i) {
        let currentCat = catCodes[i%catCodes.length];

        lockups +=
            `<lockup>
                <img src="https://http.cat/${currentCat}" width="340" height="340"/>
                <title>${currentCat}</title>
             </lockup>`
    }

    const gridSection = gridDocument.getElementsByTagName('grid').item(0).children.item(1);

    // Append lockups to the section
    let input = gridDocument.implementation.createLSInput();
    input.stringData = lockups;
    let parser = gridDocument.implementation.createLSParser(1);
    parser.parseWithContext(input, gridSection, 1);
}
