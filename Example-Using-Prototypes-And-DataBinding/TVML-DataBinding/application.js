App.onLaunch = function(options) {
    const document = createGrid();
    navigationDocument.pushDocument(document);
}


var createGrid = function() {
    const collectionList =
           `<?xml version="1.0" encoding="UTF-8" ?>
            <document>
              <stackTemplate>
                <collectionList/>
              </stackTemplate>
              </document>`


    const parser = new DOMParser();
    let doc = parser.parseFromString(collectionList, "application/xml");

    addGrid(doc)
    populateGrid(doc)

    return doc
}

var addGrid = function(document) {
    let collectionList = document.getElementsByTagName('collectionList').item(0)
    collectionList.innerHTML =
        `<grid>
           <header>
              <title>Grid</title>
           </header>
              <section binding="items: {cats};">
                 <prototypes>
                 <lockup prototype="Cat">
                    <img binding="@src: {image};" width="340" height="340"/>
                    <title binding="textContent: {title};"></title>
                 </lockup>
                 </prototypes>
              </section>
         </grid>`
}

var populateGrid = function(document) {

    // Build dataItems
    let catCodes = ["100", "200", "300", "400", "500"];
    let numberOfCells = 40000;

    let dataItems = [];
    for(let i = 0; i < numberOfCells; ++i) {
        let currentCat = catCodes[i%catCodes.length];

        let dataItem = new DataItem("Cat", dataItems.length)
        dataItem.image = `https://http.cat/${currentCat}`
        dataItem.title = currentCat

        dataItems.push(dataItem)
    }

    // Append dataItems to the section
    const gridSection = document.getElementsByTagName('grid').item(0).children.item(1);
    let sectionDataItem = gridSection.dataItem;
    if(!sectionDataItem) {
        sectionDataItem = new DataItem();
        sectionDataItem.cats = [];

        gridSection.dataItem = sectionDataItem;
    }
    Array.prototype.push.apply(gridSection.dataItem.cats, dataItems);
    gridSection.dataItem.touchPropertyPath("cats");
}
